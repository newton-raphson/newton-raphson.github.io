import React from 'react'
import ReviewDisplay from '../component/experienceDisplay';



function literatureReview() {
  const review_list = [
    {
      "title": "Graduate Research Assistant",
      "tag": ["PyTorch", "C++", "GPU Profiling", "CUDA", "Bash", "Github CI/CD", "Azure Batch"],
      "description": "The intersection of geometric deep learning, neural fields, and high-performance computing has paved the way for transformative advancements in computational analysis, particularly within the realms of NERFs (Neural Radiance Fields), 3D reconstruction, computer vision, and generative artificial intelligence. Leveraging geometric deep learning techniques allows for the creation of compact representations, facilitating more efficient computational analysis. Neural fields play a crucial role in visual computing, contributing to the intricate task of 3D geometry reconstruction. The synergy between GPU and CPU in high-performance computing further accelerates complex computations, enabling rapid progress in diverse applications. Additionally, the integration of generative AI with neural fields empowers geometric manipulation, opening new frontiers in creative expression and problem-solving within these cutting-edge application areas.", 
      "original_link" : "https://www.me.iastate.edu/bglab/",
    },
    {
      "title": "AI Fellow",
      "tag": ["Scikit-learn", "PyTorch", "TensorFlow", "Hugging Face", "FastAPI", "Kubeflow", "Federated Learning", "Jenkins", "Travis", "OpenCV", "NLTK"],
      "description": "This comprehensive portfolio covers a spectrum of machine learning domains. In classical machine learning, the focus lies on ensembles, probabilistic models, clustering, and time series analysis, with an emphasis on applying reinforcement learning to standard datasets. Deep learning endeavors include the implementation of Conditional GANs, attention-based neural translation, image reconstruction using VAE, and the exploration of federated learning methodologies. Transitioning to production, the application extends to ETL processes, ONNX serving, orchestration with Kubernetes, and deployment utilizing frameworks like TorchServe, all integrated into a seamless CI/CD pipeline. In computer vision, the approach involves state-of-the-art models such as YOLO, SAM, ResNet, and Vision Transformers for tasks like detection, localization, and recognition. Additionally, the natural language processing component showcases practical applications such as a movie recommender system based on word embeddings and keyword extraction using TF-IDF techniques. This diverse range of expertise underscores a holistic understanding and practical utilization across various machine learning domains.", 
      "original_link" : "https://fusemachines.com/",
    },
    {
      "title": "Computational Analytics and Smart Contract Engineer",
      "tag": ["Smart Contract", "Rust", "Move", "Javascript (SDK Development)", "Jira", "React", "Power BI", "GraphQL"],
      "description": "In my multifaceted role, I leverage sophisticated tools such as Crystal Ball for Monte-Carlo analysis, employing advanced techniques in risk management. For the innovative NFT product, Wapal, I harness the power of Power BI and Apache Spark to conduct comprehensive data analysis, ensuring a deep understanding of market trends and user behavior. Smart contract development is a dynamic aspect of my responsibilities, driven by user demand identified through meticulous analysis of Twitter posts. My expertise extends to blockchain technologies, particularly on platforms like Solana and Aptos. Taking on pivotal roles in both product development and as a co-founder, I actively contribute to shaping and implementing groundbreaking solutions, reflecting a commitment to technological innovation and entrepreneurial leadership.",
      "original_link" : "https://mokshya.io/",
    },
    {
      "title": "Computational Analytics and Rust Developer",
      "tag": ["Rust", "Javascript (SDK Development)", "FastAPI", "Python", "DataBricks", "Web Development", "DevOps"],
      "description": "In my role, I specialize in utilizing advanced tools like Crystal Ball for precise Monte-Carlo analysis, optimizing risk management strategies. My expertise extends to blockchain technologies, with a focus on Solana and Ethereum, where I contribute to the development and implementation of cutting-edge solutions.",
      "original_link" : "https://zebec.io/",
    },
    // 
  ];

  const displayReview = () => {
    let display = [];
    let result = [];

    review_list.map(review => {
      return display.push(
        <ReviewDisplay review={review} key={review.title} />)
    })

    for (let i = 0; i < review_list.length; i += 1) {
      result.push(
        <div className='project'>{display[i]}</div>
      )
    }
    console.log("result : ", result);
    return result;
  }

  return (
    <section>
      <div className='container pt-3'>
        <div className='row'>
          <h1>Experience</h1>
          <hr/>
          {review_list.length > 0 ? displayReview() : "No review"}
        </div>
      </div>
    </section>
  )
}

export default literatureReview


