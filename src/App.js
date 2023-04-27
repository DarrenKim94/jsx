import ProfileCard from "./ProfileCard";

function App() {
    return(
        <div>
            <div>Personal Digital Assistants</div>

            <ProfileCard title="Alexa" username="@alexa99"/>
            <ProfileCard title="Cortana" username="@cortana32"/>
            <ProfileCard title="Siri" username="@siri01"/>
        </div>
    );
}

export default App;