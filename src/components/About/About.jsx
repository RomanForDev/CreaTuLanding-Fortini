// Página de información del negocio.

function About({greeting}) {
    return <div>
        <h1>{greeting}</h1>
        <div className="about-container">
            <img src="/vite.svg" alt="" className="img-about" />
            <p className="text-about">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis a mollitia architecto ratione quos, numquam voluptatem blanditiis earum ipsam adipisci iste, nihil, itaque molestiae odit! Illum iste tenetur at quos.
            </p>
        </div>
            <p className="text-about-under">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed eligendi fugit neque deserunt? Expedita voluptatum, tenetur cumque aliquam praesentium adipisci accusantium explicabo architecto dolorum sapiente, dolore dolorem laboriosam repellat quaerat!
            </p>
        </div>
}

export default About;