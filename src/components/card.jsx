
const Card = ({title, salutation, description, image, order, bg, text}) => {

  return (
    <div className={`flex box-border border-1 p-8 m-10 shadow-xl min-h-98 ${bg}`}>
      <div className={ `flex-auto w-40 ${order}` }>
        <h1 className={`text-emerald-900 font-bold text-2xl`}>{salutation}, </h1>
        <h2 className={`text-xl p-3 font-bold ${text}`}> {title  }</h2>
        <p className={`text-xl ${text}`}> { description }</p>
      </div>
      <div className="flex-auto w-20">
        <img src={image} alt="1" />
      </div>
    </div>
  );
}

export default Card;
