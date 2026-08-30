import React from 'react';
import { motion } from 'framer-motion';
import { Card } from '../UI';
import type { ProcessStep } from '../../types';

const steps: ProcessStep[] = [
  {
    title: 'Идея',
    description: 'Обсуждаем вашу задачу, цели и ожидания',
    clientValue: 'Понимание задачи и требований'
  },
  {
    title: 'Проектирование',
    description: 'Создаю структуру и прототип будущего продукта',
    clientValue: 'Готовый план реализации'
  },
  {
    title: 'Разработка',
    description: 'Пишу код, тестирую функционал, показываю промежуточные результаты',
    clientValue: 'Работающая версия продукта'
  },
  {
    title: 'Запуск',
    description: 'Разворачиваю продукт, передаю доступы и документацию',
    clientValue: 'Готовый к использованию продукт'
  }
];

export const Process: React.FC = () => {
  return (
    <section className="py-24">
      <div className="container-custom">
        <h2 className="text-4xl font-bold mb-12 text-center text-primary">
          Процесс работы
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, index) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="h-full">
                <div className="text-accent font-mono text-sm mb-4">
                  0{index + 1}
                </div>
                <h3 className="text-xl font-semibold mb-3 text-primary">
                  {step.title}
                </h3>
                <p className="text-secondary mb-4">
                  {step.description}
                </p>
                <div className="pt-4 border-t border-border">
                  <p className="text-xs text-muted">
                    Результат: {step.clientValue}
                  </p>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
