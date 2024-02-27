import React from 'react'
import ProjectDisplay from '../component/projectDisplay'

 

const projects = () => {
    const projectsList = [
        {
            "title": "Signed Distance Representation of 3D Objects",
            "keywords": ["Pytorch", "C++","OpenGL", "MLFLow","Optuna","Signed Distance Function", "Marching Cubes", "3D Object"],
            "description": "Ongoing research project on Signed Distance Representation of 3D Objects. The goal of this project is to represent 3D objects using signed distance function and to use the representation to perform various tasks such as reconstruction, generation, and classification. The project is being developed using Pytorch, C++, and OpenGL.",
            "document_link" : "",
            "github_link" : "https://github.com/newton-raphson/sdf-representation",
        },
        {
            "title": "Spline To Field using AutoEncoders",
            "keywords": ["Pytorch", "NURBS", "AutoEncoders", "Spline", "3D Object","Python"],
            "document_link" : "",
            "description": "In today’s information-rich world, scientific publications play a pivotal role in disseminating knowledge and advancing research across various disciplines. The exponential growth of digital repositories, such as arXiv, has made it increasingly challenging for researchers to keep up with the vast volume of available literature. To address this challenge, we propose a novel approach that harnesses the power of Kaggle datasets for arXiv paper topic classification and builds a robust recommendation system.",
            "github_link" : "https://github.com/NirajanBekoju/Arxiv-Topic-Classification-and-Paper-Recommendation-System",
        },

        {
            "title" : "Vision Nerf Dissection",
            "keywords" : ["Wine Quality", "Data Analysis", "Machine Learning", "Random Forest", "Django"],
            "description" : "This machine learning project focused on predicting the quality of red wines based on their chemical properties. To achieve this, several preprocessing techniques were applied, including scaling using different methods and applying log and boxcox transformations. Exploratory data analysis was also performed to better understand the relationships between the features and the target variable. Several popular machine learning algorithms were then trained and compared, including logistic regression, SVM, random forest, decision trees, and boosting algorithms. Performance metrics such as accuracy, precision, recall, and F1 score were used to identify the best algorithm and preprocessing technique. The random forest model with id = 1 was found to be the most effective,            with a micro F1 score of 0.73.            Overall, this project highlights the importance of proper preprocessing techniques and algorithm            selection for developing an accurate and effective model for wine quality classification. The            findings have practical implications for industries such as wine production, where the ability to            predict wine quality could be invaluable.",            
            "document_link" : "https://github.com/NirajanBekoju/Wine-Quality-Classification/blob/master/Report/main.pdf",
            "github_link" : "https://github.com/NirajanBekoju/Wine-Quality-Classification"
        },
        {
            "title": "",
            "keywords": ["Fourier Series", "DFT", "Epicycles"],
            "description": "Fourier series is an expansion of a periodic function in terms of an infinite sum of sines and cosines. Fourier series make use of the orthogonality relationships of the sine and cosine functions. With appropriate weights, one cycle or period of the summation can be made to approximate an arbitrary function in that interval. In mathematics, the discrete-time fourier transform (DTFT) is a form of Fourier analysis that is applicable to the sequence of values. The DTFT is often used to analyze samples of a continuous function. The term discrete-time refers to the fact that the transform operates on discrete data, often samples whose interval has units of time. In this program, we are going to use discrete fourier transform in order to generate the fourier series of the given discrete coordinate data. In mathematics, the discrete Fourier Transform (DFT) converts a finite sequence of equally-spaced samples of function into a same-length sequence of equal-spaced samples of the discrete-time fourier transform(DTFT), which is a complex valued function of frequency.",
            "github_link" : "https://github.com/NirajanBekoju/Fourier-Transform-Drawing",
        },
        {
            "title" : "Epidemic Modelling", 
            "keywords" : ["SIR Model", "C++", "OpenGL", "Data Analysis", "Data Visualization"],
            "description" : "(Compartmental Model in Epidemiology ) Epidemic modelling is the mathematical model to illustrate the spread of epidemic disease. We have use SIR model in order to study the epidemic disease transmission. SIR model is a compartmental model in epidemiology. In this model, the population is assigned to compartments with labels - for example :- S, I or R(SUSCEPTIBLE, INFECTIOUS or RECOVERED). People may progress between compartments.",
            "github_link" : "https://github.com/NirajanBekoju/Epidemic-Modelling"
        },
        {
            "title" : "Malignant and Benign Tumor Diagnosis",
            "keywords" : ["Tumor", "pandas", "seaborn", "sk-learn", "Keras"],
            "description" : "Using the dataset obtained from kaggle for malignant and benign tumor diagonosis, in this project a model is built to predict the type of tumor and obtained 97.902% validation accuracy using keras sequential model.",
            "document_link" : "",
            "github_link" : "https://github.com/NirajanBekoju/Malignant-and-Benign-Tumor-Diagnosis"
        }

    ];

    const displayProject = () => {
        let display = [];
        let result = [];

        projectsList.map(project => {
            return display.push(
                <ProjectDisplay project = {project} key = {project.title} />)
        })

        for(let i = 0; i < projectsList.length; i+=1){
            result.push(
                <div className='project'>{display[i]}</div>
            )
        }
        return result;
    }

    return (
        <section>
            <div className='container pt-3'>
                <div className='row'>
                    <h1>Projects</h1>
                    <hr />
                    {projectsList.length > 0 ? displayProject() : "No Projects"}
                </div>
            </div>
        </section>
    )
}

export default projects