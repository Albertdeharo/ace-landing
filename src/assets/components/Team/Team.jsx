import './Team.css';

const teamMembers = [
  { name: 'César', role: 'Fundador', text: 'dummy text' },
  { name: 'Albert', role: 'Desarrollador de Producto', text: 'dummy text' },
];

const Team = () => {
  return (
    <section className="our-team pt-2">
      <h2 className='custom-title pb-2'>Nuestro Equipo</h2>
      <div className="wrapper">
        <div className="team team-list">
          {teamMembers.map((member, index) => (
            <div className="team_member" key={index}>
              <div className="team_img">
                <img src="https://i.imgur.com/2pGPLrl.png" alt="Team_image"/>
              </div>
              <h3>{member.name}</h3>
              <p className='role'>{member.role}</p>
              <p>{member.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
