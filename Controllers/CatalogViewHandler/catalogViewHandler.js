function CatalogViewHandler ( loading, view, changed ) {
  
  let result = 
      loading // До загрузки всех фото моделей
          ? 'invis chairs__carusel--chngd chairs__carusel chairs__carusel--full_screen col-1'
          : !view & changed 
            ? 'chairs__carusel--chngd chairs__carusel col-1'
            : changed 
              ? 'chairs__carusel--chngd chairs__carusel chairs__carusel--full_screen col-1'
              : view
                ? 'chairs__carusel chairs__carusel--full_screen col-1'
                : 'chairs__carusel col-1';

  return result;
}

export default CatalogViewHandler;