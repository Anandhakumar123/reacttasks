const users = [
  {
    name: "John Doe",
    id: 1,
    skills: ["Javascript", "HTML", "CSS"],
    jobType: { frontend: "true", backend: "false" },
  },
  {
    name: "Jane Doe",
    id: 2,
    skills: ["Expressjs", "React", "Node"],
    jobType: { frontend: "true", backend: "true" },
  },
  {
    name: "Billy Doe",
    id: 3,
    skills: ["Bootstrap", "Jquery", "GIt"],
    jobType: { frontend: "false", backend: "true" },
  },
];



const arrayOfItems = users.map((user) => (
    <li key={user.id}>
      <div>{user.name}</div>
      <ul>
        {user.skills.map((skill, index) => (
          <li key={index}>{skill}</li>
        ))}
      </ul>
      <div>Frontend: {user.jobType.frontend}</div>
      <div>Backend: {user.jobType.backend}</div>
    </li>
  ));



export const DisplayArray = () => {

    // const arrayOfItems = users.map((user) => (
    //     <li key={user.id}>
    //       <div>{user.name}</div>
    //       <ul>
    //         {user.skills.map((skill, index) => (
    //           <li key={index}>{skill}</li>
    //         ))}
    //       </ul>
    //       <div>Frontend: {user.jobType.frontend}</div>
    //       <div>Backend: {user.jobType.backend}</div>
    //     </li>
    //   ));
    
 
  return (
    <div>
      <ul>{arrayOfItems}</ul>
    </div>
  );
};
