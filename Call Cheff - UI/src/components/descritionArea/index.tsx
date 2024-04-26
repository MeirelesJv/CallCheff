import { iconChef, iconFood, iconHome } from "../../assets/index";

export function DescritionArea() {
  return (
    <div className="flex justify-between w-full ">
      <div className="flex items-center flex-col max-w-64 gap-4 px-4">
        <img src={iconHome} />
        <h4 className="text-dark font-semibold font-md">Em Sua Casa</h4>
        <p className="text-dark text-justify text-sm">
          Descubra sabores inovadores no conforto do seu lar com o serviço de
          Chef em Casa, onde chefs experientes preparam pratos gourmet
          personalizados diretamente na sua cozinha.
        </p>
      </div>
      <div className="flex items-center flex-col max-w-64 gap-4 px-4">
        <img src={iconFood} />
        <h4 className="text-dark font-semibold font-md">Sua Escolha</h4>
        <p className="text-dark text-justify text-sm">
          Descubra uma diversidade de pratos exóticos e saborosos em nosso site,
          trazendo os gostos de diversas partes do mundo para sua refeição.
        </p>
      </div>
      <div className="flex items-center flex-col max-w-64 gap-4 px-4">
        <img src={iconChef} />
        <h4 className="text-dark font-semibold font-md">
          Cozinheiros Especializados
        </h4>
        <p className="text-dark text-justify text-sm">
          Explore uma variedade de pratos exóticos e saborosos em nosso site,
          trazendo sabores de várias partes do mundo para a sua refeição.
        </p>
      </div>
    </div>
  );
}