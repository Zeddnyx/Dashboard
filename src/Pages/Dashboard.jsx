import Nav from "../Components/Nav";

export default function Dashboard() {
  return (
    <Nav>
      <section className="section h-screen grid gap-5 justify-center">
        <div className="flex gap-5">
          <div className="h-full w-80 bg-yellow rounded-xl"></div>
          <div className="h-full w-80 bg-yellow rounded-xl"></div>
          <div className="h-full w-80 bg-yellow rounded-xl"></div>
        </div>

        <div className="flex gap-5">
          <div className="w-full h-full rounded-xl bg-yellow"></div>
          <div className="w-80 h-full rounded-xl bg-yellow"></div>
        </div>
      </section>
    </Nav>
  );
}
