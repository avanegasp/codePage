$('form').submit(function(e){
  e.preventDefault();

//NOMBRE

var user = $('#nombre').val()

  if(user.indexOf(' ') >= 0){
    $('#nombre').closest('.form-group').addClass('has-error')
}else if(user.length === 0){
    $('#nombre').closest('.form-group').addClass('has-error')
}else{
  $('#nombre').closest('.form-group').removeClass('has-error')
};

//EMAIL
var email = $('#correo').val()

  if(email.indexOf(' ') == 0){
    $('#correo').closest('.form-group').addClass('has-error')
  }else if(email.length === 0){
    $('#correo').closest('.form-group').addClass('has-error')
  }else{
    $('#correo').closest('.form-group').removeClass('has-error')
  };

//TELEFONO
var celular = $('#telefono').val()

    if(celular.indexOf(' ') == 0){
      $('#telefono').closest('.form-group').addClass('has-error')
    }else if(celular.length === 0){
      $('#telefono').closest('.form-group').addClass('has-error')
    }else if(celular.length >= 10){
      $('#telefono').closest('.form-group').addClass('has-error')
    }else{
      $('#telefono').closest('.form-group').addClass('has-error')
    }

//CONTRASEÑA
  var contraseña = $('#contraseña').val()

  if(contraseña.indexOf(' ') == 0){
    $('#contraseña').closest('.form-group').addClass('has-error')
    }else if(contraseña.length === 0){
      $('#contraseña').closest('.form-group').addClass('has-error')
    }else if(contraseña.length >= 15){
      $('#contraseña').closest('.form-group').addClass('has-error')
    }else{
      $('#contraseña').closest('.form-group').removeClass('has-error')
    }


});
