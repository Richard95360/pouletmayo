
interface IPanierProps {
    facturation: number;
    className?:string;
}

const Panier = (props: IPanierProps) => {
const facturation = ["7 €", "3 €", "Abonnez-vous!!!"];
  return (
    <div className={props.className}>
    <h2>Prix "à la tête du client"</h2>
    <p>{facturation[props.facturation]}</p>
  </div>
  )
}

export default Panier