import { Hero } from './components/Hero';
import { Process } from './components/Process';

function App() {
  return (
    <div className="bg-bg min-h-screen">
      <Hero />
      <Process />
      
      {/* Заглушки для будущих секций */}
      <section className="py-24 container-custom">
        <h2 className="text-4xl font-bold mb-12 text-center text-primary">
          Избранные проекты
        </h2>
        <p className="text-secondary text-center">
          Секция в разработке...
        </p>
      </section>

      <section className="py-24 container-custom">
        <h2 className="text-4xl font-bold mb-12 text-center text-primary">
          Результаты
        </h2>
        <p className="text-secondary text-center">
          Секция в разработке...
        </p>
      </section>

      <section className="py-24 container-custom">
        <h2 className="text-4xl font-bold mb-12 text-center text-primary">
          Что могу сделать
        </h2>
        <p className="text-secondary text-center">
          Секция в разработке...
        </p>
      </section>

      <section className="py-24 container-custom">
        <h2 className="text-4xl font-bold mb-12 text-center text-primary">
          Почему со мной
        </h2>
        <p className="text-secondary text-center">
          Секция в разработке...
        </p>
      </section>

      <section className="py-24 container-custom">
        <div className="text-center">
          <h2 className="text-4xl font-bold mb-6 text-primary">
            Есть идея продукта? Давайте обсудим её.
          </h2>
          <button className="btn-accent mt-8">
            Обсудить проект →
          </button>
        </div>
      </section>
    </div>
  );
}

export default App;
