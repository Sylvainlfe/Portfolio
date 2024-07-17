function FormComment() {
    return (
      <form action="" className="flex flex-col justify-start my-5 mx-2">
        <label htmlFor="firstName">Prénom</label>
        <input type="text" id="firstName" name="firstName" placeholder="Prénom" className="w-60 h-12 rounded-md pl-2 mb-5"/>
  
        <label htmlFor="lastName">Nom</label>
        <input type="text" id="lastName" name="lastName" placeholder="Nom" className="w-60 h-12 rounded-md pl-2 mb-5"/>
  
        <label htmlFor="comment">Commentaire</label>
        <input
          type="text"
          id="comment"
          name="comment"
          placeholder="Laissez votre commentaire ici..."
          className="w-full h-40 rounded-md pl-2 mb-5 flex placeholder:text-start"
        />
  
        <button type="submit" className="bg-green-light-color shadow-buttonShad w-60 h-12 rounded-md font-semibold">Valider</button>
      </form>
    );
  }
  
  export default FormComment;
