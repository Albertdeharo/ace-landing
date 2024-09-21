import React from 'react';
import './Team.css';

const teamMembers = [
  { name: 'César', role: 'Fundador' },
  { name: 'Laura', role: 'Desarrolladora de Producto' },
  { name: 'José', role: 'Especialista en Marketing' },
];

const Team = () => {
  return (
    <section className="team">
      <h2>Nuestro Equipo</h2>
      <div className="team-list">
        {teamMembers.map((member, index) => (
          <div className="team-member" key={index}>
            <h3>{member.name}</h3>
            <p>{member.role}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Team;
