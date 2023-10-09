
const Reporte = require('../model/Reporte');

//Modulo para mostrar la informacion
module.exports.mostrar = async (req, res) => {
  try {
    const reportes = await Reporte.find({});
    console.log(reportes);
    res.render('index', { reportes: reportes }); 
  } catch (error) {
    console.error('Error mostrando los reportes', error);
    res.status(500).json({
      message: 'Error mostrando los reportes',
    });
  }
};

//Modulo para crear el reporte
module.exports.crear = async (req, res) => {
  try {
    const nuevoReporte = new Reporte({
      "CRASH DATE": req.body['CRASH DATE'],
      "CRASH TIME": req.body['CRASH TIME'],
      "BOROUGH": req.body['BOROUGH'],
      "NUMBER OF PERSONS INJURED": req.body['NUMBER OF PERSONS INJURED'],
      "NUMBER OF PERSONS KILLED": req.body['NUMBER OF PERSONS KILLED'],
      "CONTRIBUTING FACTOR VEHICLE 1": req.body['CONTRIBUTING FACTOR VEHICLE 1'],
      "CONTRIBUTING FACTOR VEHICLE 2": req.body['CONTRIBUTING FACTOR VEHICLE 2'],
      "VEHICLE TYPE CODE 1": req.body['VEHICLE TYPE CODE 1'],
      "VEHICLE TYPE CODE 2": req.body['VEHICLE TYPE CODE 2'],
    });

    // Guardar el reporte en la base de datos
    await nuevoReporte.save();

    //res.status(201).json({ message: 'Reporte creado con éxito' });
    res.redirect('/');
  } catch (error) {
    console.error('Error al crear el reporte:', error);
    res.status(500).json({ message: 'Error al crear el reporte' });
  }
};
/*
module.exports.editar = (req,res) => {
  const id = req.body.id_editar
  const fecha = req.body.Date_editar
  const time = req.body.Time_editar
  const colonia = req.body.Borough_editar
  const p_1 = req.body.P_I_editar
  const p_k = req.body.P_K_editar
  const f_v1 = req.body.F_V1_editar
  const f_v2 = req.body.F_V2_editar
  const t_v1 = req.body.T_V1_editar
  const t_v2 = req.body.T_V2_editar
  Reporte.findByIdAndUpdate(id, {fecha, time, colonia, p_1, p_k, f_v1, f_v2, t_v1, t_v2}, (error, reporte) )
      if(error){
        return res.status(500).json({
          message:"Error"
        })
      }
} */
//Modulo para update la informacion
module.exports.editar = async (req, res) => {
  const id = req.params.id;
  const crashDate = req.body.Date_editar;
  const crashTime = req.body.Time_editar;

  try {
    const reporte = await Reporte.findOneAndUpdate(
      { _id: id },
      { "CRASH DATE": crashDate, "CRASH TIME": crashTime },
      { new: true } 
    );

    if (!reporte) {
      return res.status(404).json({
        message: "Reporte no encontrado"
      });
    }

    res.status(200).json({
      message: "Reporte actualizado con éxito",
      reporte: reporte
    });
  } catch (error) {
    console.error('Error al actualizar el reporte:', error);
    res.status(500).json({
      message: "Error al actualizar el reporte",
      error: error.message
    });
  }
};

//Modulo para borrar un registro
module.exports.borrar = async (req, res) => {
  const id = req.params.id;

  try {
    const reporte = await Reporte.findOneAndRemove({ _id: id });

    if (!reporte) {
      return res.status(404).json({
        message: 'Reporte no encontrado'
      });
    }

    res.redirect('/');
  } catch (error) {
    console.error('Error eliminando el reporte:', error);
    res.status(500).json({
      message: 'Error eliminando el reporte',
      error: error.message
    });
  }
};
