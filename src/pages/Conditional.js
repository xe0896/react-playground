function Drink({ name }) {
  let plant = "bean";
  let caffeine = "80-185 mg/cup";
  let age = "1,000+ years";
  if (name === "tea") {
    plant = "leaf";
    caffeine = "15-70mg/cup";
    age = "4,000+ years";
  }
  return (
    <section>
      <h1>{name}</h1>
      <dl>
        <dt>Part of plant</dt>
        <dd>{plant}</dd>
        <dt>Caffeine content</dt>
        <dd>{caffeine}</dd>
        <dt>Age</dt>
        <dd>{age}</dd>
      </dl>
    </section>
  );
}

export default function DrinkList() {
  return (
    <div>
      <Drink name="tea" />
      <Drink name="coffee" />
    </div>
  );
}
