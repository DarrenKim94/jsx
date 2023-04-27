import 'bulma/css/bulma.css'
import ProfileCard from "./ProfileCard";
import AlexaImage from './images/alexa.png';
import CortanaImage from './images/cortana.png';
import SiriImage from './images/siri.png'

function App() {
    return(
        <div>
            <section className="hero is-primary">
                <div className="hero-body">
                    <p className="title">Personal Digital Assistants</p>
                </div>
            </section>

            <div className="container">
              <section className="section">
                <div className="columns">
                    <div className="column is-4">
                        <ProfileCard title="Alexa" username="@alexa99" image={AlexaImage}
                        description="Created by Amazon for purchases." 
                        />
                    </div>
                    <div className="column is-4">
                        <ProfileCard title="Cortana" username="@cortana32"image={CortanaImage}
                        description="Created by Microsoft for who knows?" 
                        />
                    </div>
                    <div className="column is-4">
                        <ProfileCard title="Siri" username="@siri01" image={SiriImage}
                        description="Created by apple to annoy you." 
                        />
                    </div>
                </div>
              </section>
            </div>  
        </div>
    );
}

export default App;