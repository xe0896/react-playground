function getImageUrl(person) {
  return "https://i.imgur.com/" + person.imageId + "s.jpg";
}

export function ListPriorityOne() {
  const Tasks = [
    {
      priority: 0,
      name: "Task 1",
    },
    {
      priority: 0,
      name: "Task 2",
    },
    {
      priority: 1,
      name: "Task 3",
    },
  ];
  const priorityOne = Tasks.filter((task) => task.priority === 1);

  const ListTasksPriorityOne = priorityOne.map((task) => <li>{task.name}</li>);

  return <ul>{ListTasksPriorityOne}</ul>;
}

export default function Lists() {
  const people = [
    "Creola Katherine Johnson: mathematician",
    "Mario José Molina-Pasquel Henríquez: chemist",
    "Mohammad Abdus Salam: physicist",
    "Percy Lavon Julian: chemist",
    "Subrahmanyan Chandrasekhar: astrophysicist",
  ];

  const betterPeople = [
    {
      id: 0,
      name: "Creola Katherine Johnson",
      profession: "mathematician",
      accomplishment: "spaceflight calculations",
      imageId: "MK3eW3A",
    },
    {
      id: 1,
      name: "Mario José Molina-Pasquel Henríquez",
      profession: "chemist",
      accomplishment: "discovery of Arctic ozone hole",
      imageId: "mynHUSa",
    },
    {
      id: 2,
      name: "Mohammad Abdus Salam",
      profession: "physicist",
      accomplishment: "electromagnetism theory",
      imageId: "bE7W1ji",
    },
    {
      id: 3,
      name: "Percy Lavon Julian",
      profession: "chemist",
      accomplishment:
        "pioneering cortisone drugs, steroids and birth control pills",
      imageId: "IOjWm71",
    },
    {
      id: 4,
      name: "Subrahmanyan Chandrasekhar",
      profession: "astrophysicist",
      accomplishment: "white dwarf star mass calculations",
      imageId: "lrWQx8l",
    },
  ];

  const listItems = people.map((person) => <li>{person}</li>);

  const chemists = betterPeople.filter(
    (person) => person.profession === "chemist"
  );

  const chemistsInfo = chemists.map((person) => (
    <li>
      <p>
        <b>{person.name}</b>
        {" " + person.profession + " "}
        known for {person.accomplishment}
      </p>
      <img src={getImageUrl(person)} alt={person.name} />
    </li>
  ));

  return (
    <div>
      <ul>{listItems}</ul>
      <ul>{chemistsInfo}</ul>
      <ListPriorityOne />
    </div>
  );
}
