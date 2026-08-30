import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '../UI';

export const Hero: React.FC = () => {
  const [animationPhase, setAnimationPhase] = useState<'code' | 'transform' | 'ui'>('code');
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  // Запуск цикла анимации
  useEffect(() => {
    const codeDuration = 2500;
    const transformDuration = 3000;
    const uiDuration = 8000;

    const timer1 = setTimeout(() => {
      setAnimationPhase('transform');
    }, codeDuration);

    const timer2 = setTimeout(() => {
      setAnimationPhase('ui');
    }, codeDuration + transformDuration);

    const timer3 = setTimeout(() => {
      setAnimationPhase('code');
    }, codeDuration + transformDuration + uiDuration);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
      clearTimeout(timer3);
    };
  }, []);

  // Отслеживание курсора для интерактивности
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth - 0.5) * 20,
        y: (e.clientY / window.innerHeight - 0.5) * 20,
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <section className="min-h-screen flex items-center justify-center py-16 overflow-hidden">
      <div className="container-custom w-full">
        <div className="max-w-6xl mx-auto">
          {/* Текстовая часть */}
          <div className="text-center mb-16">
            <motion.h1 
              className="text-hero font-bold mb-6 text-primary leading-tight"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              Превращаю код<br />
              <span className="gradient-text">в работающие продукты</span>
            </motion.h1>
            
            <motion.p 
              className="text-xl text-secondary mb-8 max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Разрабатываю сайты, веб-сервисы и автоматизирую бизнес-процессы.
              От идеи до запуска — один исполнитель.
            </motion.p>

            <motion.div 
              className="flex flex-wrap justify-center gap-3 mb-10"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <span className="text-muted text-sm">Сайты</span>
              <span className="text-muted text-sm">/</span>
              <span className="text-muted text-sm">Веб-сервисы</span>
              <span className="text-muted text-sm">/</span>
              <span className="text-muted text-sm">Автоматизация</span>
              <span className="text-muted text-sm">/</span>
              <span className="text-muted text-sm">Telegram-боты</span>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              <Button>
                Обсудить проект →
              </Button>
            </motion.div>
          </div>

          {/* Визуальная часть: Код → Интерфейс */}
          <div className="relative h-[500px] w-full">
            <AnimatePresence mode="wait">
              {/* Состояние 1: Код */}
              {animationPhase === 'code' && (
                <motion.div
                  key="code"
                  className="absolute inset-0 card font-mono text-sm"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.5 }}
                  style={{
                    transform: `translate(${mousePosition.x * 0.5}px, ${mousePosition.y * 0.5}px)`,
                  }}
                >
                  <div className="p-6 space-y-3">
                    <motion.div 
                      className="text-secondary"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.2 }}
                    >
                      <span className="text-accent">import</span> {'{'} createProduct {'}'} <span className="text-accent">from</span> <span className="text-primary">'./development'</span>;
                    </motion.div>
                    
                    <motion.div 
                      className="text-secondary"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.4 }}
                    >
                      <span className="text-accent">const</span> <span className="text-accent-secondary">project</span> = <span className="text-accent">await</span> <span className="text-primary">createProduct</span>({'{'}
                    </motion.div>
                    
                    <motion.div 
                      className="pl-6 text-secondary"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.6 }}
                    >
                      goal: <span className="text-primary">"Увеличить конверсию на 40%"</span>,
                    </motion.div>
                    
                    <motion.div 
                      className="pl-6 text-secondary"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.8 }}
                    >
                      timeline: <span className="text-primary">"3 недели"</span>,
                    </motion.div>
                    
                    <motion.div 
                      className="pl-6 text-secondary"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 1.0 }}
                    >
                      stack: [<span className="text-primary">"React"</span>, <span className="text-primary">"Node.js"</span>, <span className="text-primary">"PostgreSQL"</span>],
                    </motion.div>
                    
                    <motion.div 
                      className="pl-6 text-secondary"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 1.2 }}
                    >
                      automation: <span className="text-accent">true</span>
                    </motion.div>
                    
                    <motion.div 
                      className="text-secondary"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 1.4 }}
                    >
                      {'}'});
                    </motion.div>
                    
                    <motion.div 
                      className="pt-4 text-secondary"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 1.6 }}
                    >
                      <span className="text-accent">return</span> <span className="text-accent-secondary">product</span>.<span className="text-primary">deploy</span>();
                    </motion.div>
                  </div>
                </motion.div>
              )}

              {/* Состояние 2: Трансформация */}
              {animationPhase === 'transform' && (
                <motion.div
                  key="transform"
                  className="absolute inset-0"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  {/* Левая часть - исчезающий код */}
                  <motion.div 
                    className="absolute left-0 top-0 w-1/2 h-full card font-mono text-sm opacity-50"
                    initial={{ x: 0, opacity: 1 }}
                    animate={{ x: -100, opacity: 0 }}
                    transition={{ duration: 2.5 }}
                  >
                    <div className="p-6 space-y-3">
                      <div className="text-secondary">
                        <span className="text-accent">const</span> <span className="text-accent-secondary">interface</span> = ...
                      </div>
                      <div className="pl-6 text-secondary">building...</div>
                    </div>
                  </motion.div>

                  {/* Правая часть - появляющийся UI */}
                  <motion.div 
                    className="absolute right-0 top-0 w-1/2 h-full"
                    initial={{ x: 100, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ duration: 2.5, delay: 0.5 }}
                    style={{
                      transform: `translate(${mousePosition.x * 0.3}px, ${mousePosition.y * 0.3}px)`,
                    }}
                  >
                    <div className="card h-full p-6">
                      <div className="flex items-center justify-between mb-6">
                        <div className="h-4 w-32 bg-surface-elevated rounded"></div>
                        <div className="flex gap-2">
                          <div className="h-8 w-8 bg-accent/20 rounded"></div>
                          <div className="h-8 w-8 bg-accent/20 rounded"></div>
                        </div>
                      </div>
                      
                      <div className="grid grid-cols-3 gap-4 mb-6">
                        <motion.div 
                          className="card-elevated p-4 rounded-lg"
                          initial={{ scale: 0.8, opacity: 0 }}
                          animate={{ scale: 1, opacity: 1 }}
                          transition={{ delay: 0.8 }}
                        >
                          <div className="h-3 w-16 bg-surface-elevated rounded mb-2"></div>
                          <div className="h-6 w-24 bg-accent/30 rounded"></div>
                        </motion.div>
                        <motion.div 
                          className="card-elevated p-4 rounded-lg"
                          initial={{ scale: 0.8, opacity: 0 }}
                          animate={{ scale: 1, opacity: 1 }}
                          transition={{ delay: 1.0 }}
                        >
                          <div className="h-3 w-16 bg-surface-elevated rounded mb-2"></div>
                          <div className="h-6 w-24 bg-accent-secondary/30 rounded"></div>
                        </motion.div>
                        <motion.div 
                          className="card-elevated p-4 rounded-lg"
                          initial={{ scale: 0.8, opacity: 0 }}
                          animate={{ scale: 1, opacity: 1 }}
                          transition={{ delay: 1.2 }}
                        >
                          <div className="h-3 w-16 bg-surface-elevated rounded mb-2"></div>
                          <div className="h-6 w-24 bg-accent/30 rounded"></div>
                        </motion.div>
                      </div>

                      <motion.div 
                        className="card-elevated p-4 rounded-lg mb-4"
                        initial={{ scaleX: 0, opacity: 0 }}
                        animate={{ scaleX: 1, opacity: 1 }}
                        transition={{ delay: 1.4, duration: 0.8 }}
                      >
                        <div className="flex justify-between mb-3">
                          <div className="h-3 w-20 bg-surface-elevated rounded"></div>
                          <div className="h-3 w-12 bg-accent/30 rounded"></div>
                        </div>
                        <div className="h-2 w-full bg-surface-elevated rounded overflow-hidden">
                          <motion.div 
                            className="h-full bg-accent"
                            initial={{ width: '0%' }}
                            animate={{ width: '75%' }}
                            transition={{ delay: 2.0, duration: 0.8 }}
                          />
                        </div>
                      </motion.div>

                      <motion.div 
                        className="card-elevated p-4 rounded-lg"
                        initial={{ scaleX: 0, opacity: 0 }}
                        animate={{ scaleX: 1, opacity: 1 }}
                        transition={{ delay: 1.6, duration: 0.8 }}
                      >
                        <div className="flex justify-between mb-3">
                          <div className="h-3 w-24 bg-surface-elevated rounded"></div>
                          <div className="h-3 w-12 bg-accent-secondary/30 rounded"></div>
                        </div>
                        <div className="h-2 w-full bg-surface-elevated rounded overflow-hidden">
                          <motion.div 
                            className="h-full bg-accent-secondary"
                            initial={{ width: '0%' }}
                            animate={{ width: '60%' }}
                            transition={{ delay: 2.2, duration: 0.8 }}
                          />
                        </div>
                      </motion.div>
                    </div>
                  </motion.div>
                </motion.div>
              )}

              {/* Состояние 3: Готовый интерфейс */}
              {animationPhase === 'ui' && (
                <motion.div
                  key="ui"
                  className="absolute inset-0"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.5 }}
                  style={{
                    transform: `translate(${mousePosition.x * 0.2}px, ${mousePosition.y * 0.2}px)`,
                  }}
                >
                  <div className="card h-full p-6">
                    {/* Header интерфейса */}
                    <div className="flex items-center justify-between mb-8">
                      <div className="flex items-center gap-3">
                        <div className="h-10 w-10 bg-accent rounded-lg flex items-center justify-center">
                          <span className="text-primary font-bold text-lg">D</span>
                        </div>
                        <div>
                          <div className="text-primary font-semibold">Dashboard</div>
                          <div className="text-muted text-xs">Проект запущен</div>
                        </div>
                      </div>
                      <div className="flex gap-3">
                        <button className="h-10 px-4 bg-surface-elevated rounded-lg text-secondary text-sm hover:text-primary transition-colors">
                          Настройки
                        </button>
                        <button className="h-10 px-4 btn-accent rounded-lg text-sm">
                          Экспорт
                        </button>
                      </div>
                    </div>

                    {/* Метрики */}
                    <div className="grid grid-cols-3 gap-4 mb-6">
                      <motion.div 
                        className="card-elevated p-5 rounded-xl"
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.2 }}
                      >
                        <div className="text-muted text-xs mb-2">Конверсия</div>
                        <div className="text-3xl font-bold text-primary mb-1">+42%</div>
                        <div className="text-accent text-xs">↑ за 3 недели</div>
                      </motion.div>
                      
                      <motion.div 
                        className="card-elevated p-5 rounded-xl"
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.3 }}
                      >
                        <div className="text-muted text-xs mb-2">Заявок</div>
                        <div className="text-3xl font-bold text-primary mb-1">1,247</div>
                        <div className="text-accent-secondary text-xs">↑ 380 за неделю</div>
                      </motion.div>
                      
                      <motion.div 
                        className="card-elevated p-5 rounded-xl"
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.4 }}
                      >
                        <div className="text-muted text-xs mb-2">Время загрузки</div>
                        <div className="text-3xl font-bold text-primary mb-1">0.8с</div>
                        <div className="text-accent text-xs">↓ на 65%</div>
                      </motion.div>
                    </div>

                    {/* График */}
                    <motion.div 
                      className="card-elevated p-5 rounded-xl mb-4"
                      initial={{ scaleX: 0, opacity: 0 }}
                      animate={{ scaleX: 1, opacity: 1 }}
                      transition={{ delay: 0.5, duration: 0.6 }}
                    >
                      <div className="flex justify-between items-center mb-4">
                        <div className="text-primary font-medium">Динамика роста</div>
                        <div className="flex gap-2">
                          <span className="text-xs text-muted">Пн</span>
                          <span className="text-xs text-muted">Вт</span>
                          <span className="text-xs text-muted">Ср</span>
                          <span className="text-xs text-muted">Чт</span>
                          <span className="text-xs text-muted">Пт</span>
                          <span className="text-xs text-muted">Сб</span>
                          <span className="text-xs text-muted">Вс</span>
                        </div>
                      </div>
                      <div className="h-32 flex items-end justify-between gap-2">
                        {[40, 65, 45, 80, 55, 90, 75].map((height, i) => (
                          <motion.div
                            key={i}
                            className="flex-1 bg-accent/30 rounded-t"
                            initial={{ height: 0 }}
                            animate={{ height: `${height}%` }}
                            transition={{ delay: 0.7 + i * 0.1, duration: 0.4 }}
                          />
                        ))}
                      </div>
                    </motion.div>

                    {/* Таблица активности */}
                    <motion.div 
                      className="card-elevated p-5 rounded-xl"
                      initial={{ scaleY: 0, opacity: 0 }}
                      animate={{ scaleY: 1, opacity: 1 }}
                      transition={{ delay: 0.8, duration: 0.6 }}
                    >
                      <div className="text-primary font-medium mb-4">Последняя активность</div>
                      <div className="space-y-3">
                        {[
                          { action: 'Новая заявка', time: '2 мин назад', status: 'new' },
                          { action: 'Оплата получена', time: '15 мин назад', status: 'success' },
                          { action: 'Обновление данных', time: '1 час назад', status: 'update' },
                        ].map((item, i) => (
                          <motion.div
                            key={i}
                            className="flex justify-between items-center py-2 border-b border-border last:border-0"
                            initial={{ x: -20, opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            transition={{ delay: 1.0 + i * 0.15 }}
                          >
                            <div className="flex items-center gap-3">
                              <div className={`w-2 h-2 rounded-full ${
                                item.status === 'new' ? 'bg-accent' :
                                item.status === 'success' ? 'bg-accent-secondary' :
                                'bg-muted'
                              }`} />
                              <span className="text-secondary text-sm">{item.action}</span>
                            </div>
                            <span className="text-muted text-xs">{item.time}</span>
                          </motion.div>
                        ))}
                      </div>
                    </motion.div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Индикатор фазы (опционально, можно убрать) */}
          <motion.div 
            className="text-center mt-8 text-muted text-xs"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
          >
            {animationPhase === 'code' && 'Разработка...'}
            {animationPhase === 'transform' && 'Трансформация...'}
            {animationPhase === 'ui' && 'Готовый продукт'}
          </motion.div>
        </div>
      </div>
    </section>
  );
};
