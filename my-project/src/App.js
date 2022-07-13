import logo from './logo.svg';
import './App.css';
import styles from './App.module.css'

function App() {
  return (
    <div>
      <div className="h-16 bg-red-700">
        <div className="bg-green-400 mx-auto w-3/5 h-16">
          adfadf
        </div>
      </div>

      <div className=" bg-purple-800 pt-10">
        <div className="w-3/5 mx-auto">
          <div className="font-bold text-4xl w-1/2">
          Разработка веб-сайтов под ключ в Якутске
          </div>
          <div className="text-base mt-5 w-1/2">
          Мы — агентство полного цикла. Наши услуги включают маркетинговую стратегию, брендинг, производство рекламных материалов, разработку сайта, поддержку и эффективное привлечение клиентов
          </div>
          <div className=" mb-[250px]">
            <button className="w-40 bg-green-500 mt-10 text-sm p-2 rounded ">Отправить заявку</button>
            <button className="w-40 bg-green-500 mt-10 text-sm p-2 rounded ml-4">Посмотреть кейсы</button>
          </div>
        </div>
       
        
        <div className="w-3/5 bg-red-600 mx-auto">
          <div className="bg-blue-600 text-3xl font-bold">Услуги</div>

          
          <div className="w-1/2 bg-yellow-600 ">
            <div className="font-bold text-lg">
              Создание сайта
            </div>
            <div className="">
            Рисуем прототипы, создаём макеты, верстаем для разных типов устройств. Внедряем необходимую CMS, интегрируем CRM.
            </div>
            <button className={styles.button}>
              Разработка корпоративного сайта
            </button>

          </div>
        </div>

      </div>
      

    </div>
    
  );
}

export default App;
