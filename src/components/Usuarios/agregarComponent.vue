<template>
  <div>
      <div class="container">
        <div class="col-12">
                <div class="card">
                    <div class="card-header">
                      Agregar usuario
                    </div>
                    <div class="card-body">
                      <form>
                        <div class="form-row">
                            <div class="col">
                              <input type="text" class="form-control" v-model="nombre" placeholder="Nombres">
                            </div>
                            <div class="col">
                              <input type="text" class="form-control" v-model="apellido" placeholder="Apellidos">
                            </div>
                            <div class="col">
                              <input type="date" class="form-control" v-model="fecha" placeholder="Fecha de nacimiento">
                            </div>
                        </div>
                        <br>
                        <div class="form-row"> 
                            <div class="col">
                              <input type="text" class="form-control" placeholder="DUI">
                            </div>
                            <div class="col">
                              <input type="text" class="form-control" placeholder="NIT">
                            </div>
                            <div class="col">
                              <select class="form-control">
                                <option value="0" selected="selected">-Estado civil-</option>
                                <option value="1">Casado</option>
                                <option value="2">Divorciado</option>
                                <option value="3">Viudo</option>
                              </select>
                            </div>
                        </div>
                        <br>
                        <div class="form-row"> 
                            <div class="col">
                              <input type="email" class="form-control" placeholder="Correo">
                            </div>
                            <div class="col">
                              <input type="text" class="form-control" placeholder="Telefono">
                            </div>
                            <div class="col">
                              <select class="form-control">
                                <option value="0" selected="selected">-Nivel-</option>
                                <option value="1">Administrador</option>
                                <option value="2">Gerente</option>
                                <option value="3">Jefe de bodega</option>
                                <option value="3">Empleado de bodega</option>
                              </select>
                            </div>
                        </div>
                        <br>
                        <div class="form-row"> 
                            <div class="col">
                              <select class="form-control">
                                <option value="0" selected="selected">-Sucursal-</option>
                                <option value="1">Sonsonate, Armenia, Sucursal.</option>
                                <option value="2">San Salvador, San Salvador, Sucursal.</option>
                              </select>
                            </div>
                        </div>
                        <br>
                        <div class="card">
                            <div class="card-header">
                              Direccion
                            </div>
                            <div class="card-body">
                                  <br>
                                  <div class="form-row"> 
                                      <div class="col">
                                        <select class="form-control">
                                          <option value="0" selected="selected">-Departamento-</option>
                                          <option value="1">Sonsonate</option>
                                          <option value="2">San Salvador</option>
                                        </select>
                                      </div>
                                      <div class="col">
                                        <input type="text" class="form-control" placeholder="Municipio">
                                      </div>
                                      <div class="col">
                                        <input type="text" class="form-control" placeholder="Descripcion">
                                      </div>
                                  </div>
                            </div>
                        </div>
                          <button type="submit" class="btn btn-primary mr-4">Enviar</button>
                          <button type="submit" class="btn btn-danger ">Cancelar</button>
                      </form>
                    </div>
                </div>
        </div>
      </div>
  </div>
</template>

<script>
import router from 'vue-router'
export default {
    name: 'agregarComponent',
    data (){
      return {
          nombre: '',
          apellido: '',
          fecha: ''
      }
    }
}
</script>

