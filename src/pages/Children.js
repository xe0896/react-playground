function Pic({ person, size }) {
  const url = "https://i.imgur.com/";
  const end = "m.jpg";
  return (
    <div>
      <h1> Photo </h1>
      <img
        className="avatar"
        src={url + person.imageId + end}
        alt={person.name}
        width={size}
        height={size}
      />
    </div>
  );
}

function Card({ children }) {
  return (
    <div className="card">
      <div className="card-content">{children}</div>
    </div>
  );
}

export default function Children() {
  return (
    <div>
      <Card>
        <Pic
          person={{
            imageId: "OKS67lh",
            name: "Aklilu Lemma",
          }}
          size={70}
        />
      </Card>

      <Card>
        <h1>About</h1>
        <p>
          Aklilu Lemma was a distinguished Ethiopian scientist who discovered a
          natural treatment to schistosomiasis.
        </p>
      </Card>
    </div>
  );
}
