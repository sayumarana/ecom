import React from 'react';
import './home.css';


const Home = (props) => {
    return (
        <React.Fragment>
            <h1 className="main-header">Mother Heals Herb Shop</h1>
    
        <div className="container">
        <div className="slidershow">
        <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
          <ol className="carousel-indicators">
            <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
            <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
            <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
            <li data-target="#carouselExampleIndicators" data-slide-to="3"></li>
            <li data-target="#carouselExampleIndicators" data-slide-to="4"></li>
          </ol>
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img src="https://upload.wikimedia.org/wikipedia/commons/2/2e/Chondrus_crispus_-_K%C3%B6hler%E2%80%93s_Medizinal-Pflanzen-034.jpg" className="d-block w-100" alt="Herbs"/>
            </div>
            <div className="carousel-item">
              <img src="https://i.pinimg.com/originals/1f/b5/79/1fb5792670d5586d05bba2e28698f5a5.jpg" className="d-block w-100" alt="Herbal compounds"/>
            </div>
            <div className="carousel-item">
              <img src="https://i.pinimg.com/originals/6c/fa/2a/6cfa2acf3aef2b10341386e01c0c1931.jpg" className="d-block w-100" alt="Capsules"/>
            </div>
            <div className="carousel-item">
              <img src="https://i.pinimg.com/originals/8c/9e/98/8c9e980eda1a95a9c6b028994daf2dbc.jpg" className="d-block w-100" alt="Capsules"/>
            </div>
            <div className="carousel-item">
              <img src="https://i.pinimg.com/originals/2c/47/4e/2c474ea8f31fa573856cea187f671b0a.jpg" className="d-block w-100" alt="Capsules"/>
            </div>
          </div>
          <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="sr-only">Previous</span>
          </a>
          <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="sr-only">Next</span>
          </a>
        </div>
      </div>
      </div>
      
          <div className="introduction">
      
            <h2 className="main-intro"> Welcome to Mother Heals Herb Shop! </h2>
            <p className="gen-info"> 
               Holistic approach to disease relies on natural botanical remedies to cleanse and detoxify the body, bringing it back to a more alkaline state 
               from the acidity that causes disease and pathology. Natural vegetable cell food compounds are an important part of that change. By removing accumulated toxins,
               and replacing depleted minerals, cell foods can rejuvenate damaged cell tissue, especially those eroded by acidity. The primary organs affected are the skin, 
               liver, gall bladder, lymph glands, kidneys and the colon. With inclusive nutritional programs designed, not around the pathology, but around the whole person
               and their diet and health, cell foods are an important part of the nutritional environment of every recovering, responsible and healthy individual.</p>
            <img src="https://i.pinimg.com/originals/ce/1c/dc/ce1cdc1203d44bc2a29761c8f00e25fe.jpg" className="main-pics" alt="dandelion root"/>
            <p className="gen-info"> 
               According to Western medical research, diseases are a result of the host being infected with a “germ”, “virus”, or “bacteria”. In their 
               approach in treating these “infestations”, inorganic, carcinogenic chemicals are employed. Our research immediately uncovers flaws in their premise through 
               basic deductive reasoning. By consistently utilizing the same premise and methods, they have consistently yielded ineffective results. In essence, in the 
               400-year tradition of the European philosophy of medicine, their approach in treating disease has yet to produce any cures.</p>
            <p className="gen-info">
                In contrast, as we examine an African approach to disease, it diametrically opposes the present Western approach. Specifically, the African Bio-mineral Balance refutes the germ/virus/bacteria premise. Our research reveals that all manifestation of disease finds its genesis when and where the mucous membrane has been compromised. For example, if there is excess mucous in the bronchial tubes, the disease is Bronchitis; if it is in the lungs, the disease is Pneumonia; in the pancreatic duct, it is Diabetes; in the joints Arthritis. All of the African Bio-mineral Balance compounds are comprised of natural plants; which means its constitution is of an alkaline nature.
                This is important- and instrumental in our success in reversing pathologies- because disease can only exist in an environment that is acid; thus it is inconsistent to utilize inorganic substances when treating disease because they are of an acid base. Only consistent use of natural botanical remedies will effectively cleanse and detoxify a diseased body, reversing it to its intended alkaline state.</p>
            <img src="https://i.pinimg.com/originals/4d/34/03/4d34034f1a87d21c1fc1322a8b46d67e.jpg" className="main-pics" alt="seamoss"/>
            <p className="gen-info">
                Our system of nutrition goes even further. In addition to removing the accumulation of years of toxins, the 
                African Bio-mineral Balance replaces depleted minerals and rejuvenates damaged cell tissue eroded by the acid, diseased state. 
                The primary organs of elimination are the skin, liver, gall bladder, lymph glands, kidneys and the colon. If all toxins are
               eliminated from the above mentioned organs they will be recycled throughout the entire body, manifesting disease. Eventually 
               the body breaks down in the weakest organs due to its inability to dispel the influence of toxins. The colon 
               is the most important organ and must be cleansed by detoxifying before any disease can be reversed. If the 
               colon is the only organ cleansed and detoxified the other major organs will be left toxic, thus leaving the 
               disease in the body.
            </p>
          </div>
          </React.Fragment>
    )
}

export default Home;