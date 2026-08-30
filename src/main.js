/**
 * Hero Animation: "Code → Interface"
 * Реализация согласно HERO_ANIMATION.md
 * 
 * Состояния:
 * 1. Код как часть интерфейса (0-4.5с)
 * 2. Трансформация строк кода в UI-элементы (4.5-9с)
 * 3. Готовый веб-интерфейс продукта (9-13.5с)
 */

const codeContent = document.getElementById('codeContent');
const codeEditor = document.getElementById('codeEditor');

// Исходный код (состояние 1)
const codeLines = [
  { text: '// Анализирую бизнес-метрики', type: 'comment' },
  { text: 'const', type: 'keyword', rest: ' ROI = calculateROI(data);' },
  { text: 'function', type: 'function', rest: ' optimizeConversion(userFlow) {' },
  { text: '  const', type: 'keyword', rest: ' frictionPoints = detectFriction(userFlow);' },
  { text: '  ', type: 'variable', rest: 'revenue = increaseConversion(frictionPoints);' },
  { text: '  ', type: 'keyword', rest: 'return revenue;' },
  { text: '}', type: '' },
  { text: '', type: '' },
  { text: '// Результат: рост конверсии на 34%', type: 'comment' },
  { text: 'export default', type: 'keyword', rest: ' RevenueGrowth;' }
];

// Финальный UI (состояние 3 - визуальная трансформация)
const uiElements = [
  { label: 'ROI', value: '+127%' },
  { label: 'Конверсия', value: '+34%' },
  { label: 'Скорость', value: '0.8с' },
  { label: 'Lighthouse', value: '98/100' }
];

let currentPhase = 0;
const phaseDuration = 4500; // 4.5 секунды на фазу
const totalCycle = phaseDuration * 3; // 13.5 секунд цикл

// Функция для рендеринга кода с подсветкой
function renderCode(lines) {
  return lines.map(line => {
    if (!line.text && !line.rest) return '';
    const mainClass = line.type ? `token-${line.type}` : '';
    const mainSpan = line.text ? `<span class="${mainClass}">${escapeHtml(line.text)}</span>` : '';
    const restSpan = line.rest ? `<span class="token-${line.rest.trim().startsWith('//') ? 'comment' : ''}">${escapeHtml(line.rest)}</span>` : '';
    return `${mainSpan}${restSpan}`;
  }).join('\n');
}

// Функция для рендеринга UI элементов
function renderUI() {
  return uiElements.map(el => 
    `<div class="metric-card">\n    <span class="metric-label">${el.label}</span>\n    <span class="metric-value accent">${el.value}</span>\n  </div>`
  ).join('\n');
}

function escapeHtml(text) {
  const div = document.createElement('div');
  div.textContent = text;
  return div.innerHTML;
}

// Анимация печати текста
async function typeText(element, lines, delay = 50) {
  element.innerHTML = '';
  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];
    const lineEl = document.createElement('div');
    element.appendChild(lineEl);
    
    if (line.text) {
      const mainClass = line.type ? `token-${line.type}` : '';
      const mainSpan = document.createElement('span');
      mainSpan.className = mainClass;
      lineEl.appendChild(mainSpan);
      
      for (let j = 0; j < line.text.length; j++) {
        mainSpan.textContent += line.text[j];
        await sleep(delay);
      }
    }
    
    if (line.rest) {
      const restClass = line.rest.trim().startsWith('//') ? 'token-comment' : '';
      const restSpan = document.createElement('span');
      restSpan.className = restClass;
      lineEl.appendChild(restSpan);
      
      for (let j = 0; j < line.rest.length; j++) {
        restSpan.textContent += line.rest[j];
        await sleep(delay);
      }
    }
    
    await sleep(100); // Пауза между строками
  }
}

// Анимация трансформации кода в UI
async function transformToUI() {
  const metricsHtml = renderUI();
  
  // Плавное затухание кода
  codeContent.style.transition = 'opacity 0.5s ease';
  codeContent.style.opacity = '0';
  
  await sleep(500);
  
  // Замена содержимого на UI метрики
  codeContent.innerHTML = metricsHtml;
  codeContent.classList.add('ui-mode');
  
  // Проявление UI
  codeContent.style.opacity = '0';
  setTimeout(() => {
    codeContent.style.transition = 'opacity 0.5s ease';
    codeContent.style.opacity = '1';
  }, 50);
  
  // Добавляем стили для UI режима
  if (!document.getElementById('ui-styles')) {
    const style = document.createElement('style');
    style.id = 'ui-styles';
    style.textContent = `
      .ui-mode {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 24px;
        padding: 16px;
      }
      .metric-card {
        background: #1a1a1a;
        border: 1px solid #2a2a2a;
        padding: 16px;
        display: flex;
        flex-direction: column;
        gap: 8px;
      }
      .metric-label {
        font-family: 'IBM Plex Mono', monospace;
        font-size: 12px;
        color: #a0a0a0;
      }
      .metric-value {
        font-family: 'IBM Plex Mono', monospace;
        font-size: 24px;
        font-weight: 600;
      }
    `;
    document.head.appendChild(style);
  }
}

// Возврат к коду
async function resetToCode() {
  codeContent.style.transition = 'opacity 0.5s ease';
  codeContent.style.opacity = '0';
  
  await sleep(500);
  
  codeContent.classList.remove('ui-mode');
  codeContent.innerHTML = renderCode(codeLines);
  
  codeContent.style.opacity = '0';
  setTimeout(() => {
    codeContent.style.transition = 'opacity 0.5s ease';
    codeContent.style.opacity = '1';
  }, 50);
}

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

// Основной цикл анимации
async function runAnimationCycle() {
  // Фаза 1: Печать кода
  await typeText(codeContent, codeLines, 30);
  await sleep(phaseDuration - (codeLines.length * 80)); // Дожимаем до конца фазы
  
  // Фаза 2: Трансформация в UI
  await transformToUI();
  await sleep(phaseDuration);
  
  // Фаза 3: Возврат к коду
  await resetToCode();
  await sleep(phaseDuration);
  
  // Повтор цикла
  runAnimationCycle();
}

// Параллакс эффект при движении мыши
document.addEventListener('mousemove', (e) => {
  const mouseX = e.clientX / window.innerWidth - 0.5;
  const mouseY = e.clientY / window.innerHeight - 0.5;
  
  codeEditor.style.transform = `translate(${mouseX * -10}px, ${mouseY * -10}px)`;
});

// Запуск анимации после загрузки DOM
document.addEventListener('DOMContentLoaded', () => {
  // Начальный рендер кода без анимации печати для первого кадра
  codeContent.innerHTML = renderCode(codeLines.slice(0, 3));
  codeContent.innerHTML += '<span class="cursor">_</span>';
  
  // Небольшая задержка перед началом полного цикла
  setTimeout(() => {
    runAnimationCycle();
  }, 1000);
});

// Стили для курсора
const cursorStyle = document.createElement('style');
cursorStyle.textContent = `
  .cursor {
    animation: blink 1s step-end infinite;
    color: #ff3b30;
  }
  @keyframes blink {
    0%, 100% { opacity: 1; }
    50% { opacity: 0; }
  }
`;
document.head.appendChild(cursorStyle);
