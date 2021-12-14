import "../styles/Technologies.css";


export const Technologies = () => {
  return (
    <div>
      <h1 className="techstack-title">Tech Stack</h1>
      <div className="main-text-container">
        <h4 className="main-title-text"> Over the course of the past year and a half, I have built multiple projects demonstrating my copetency and understanding across different technologies. As a result, I have mastered the
        following languages, frameworks, databases, and cloud services. </h4>
      </div>
        <div className="languages-container">
          <div className="language-div">
            <i className="language-icon devicon-html5-plain colored" />
            HTML
          </div>

          <div className="language-div">
            <i className="language-icon devicon-javascript-plain colored" />
            JavaScript
          </div>

          <div className="language-div">
            <i className="language-icon devicon-css3-plain colored" />
            CSS + <i className="language-icon devicon-sass-plain colored" /> Sass
          </div>

          <div className="language-div">
            <i className="language-icon devicon-react-original colored" />
            React
          </div>

          <div className="language-div">
            <i className="language-icon devicon-ruby-plain colored" />
            Ruby
          </div>

          <div className="language-div">
            <i className="language-icon devicon-rails-plain colored" />
            Rails
          </div>

          <div className="language-div">
            <i className="language-icon devicon-postgresql-plain colored" />
            PostgreSQL
          </div>

          <div className="language-div">
            <i className="language-icon devicon-express-original colored" />
            Express
          </div>

          <div className="language-div">
            <i className="language-icon devicon-mongodb-plain colored" />
            MongoDB
          </div>

          <div className="language-div">
            <i className="language-icon devicon-java-plain colored" />
            Java
          </div>

          <div className="language-div">
            <i className="language-icon devicon-mysql-plain colored" />
            MySQL
          </div>
          
          <div className="language-div">
            <i className="language-icon devicon-go-plain colored" />
            Golang
          </div>
        
          <div className="language-div">
            <i className="language-icon devicon-googlecloud-plain colored" />
            Google Cloud
          </div>

          <div className="language-div">
            <i className="language-icon devicon-docker-plain colored" />
            Docker
          </div>

          <div className="language-div">
            <i className="language-icon devicon-kubernetes-plain colored" />
            Kubernetes
          </div>

          <div className="language-div">
            <i className="language-icon devicon-amazonwebservices-plain colored" />
            AWS
          </div>


        </div> 
    </div>
  );
};