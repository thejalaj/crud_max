var PatientsShow = React.createClass({
  getInitialState: function(){
    return({Patients: this.props.Patients})
  },
  render: function() {
    var company_details = this.state.Patients.map((function (m) {
        return(<ShowEachPatients patient={m} id={m.id} />);}).bind(this));
    return (
      <div className="card-body card">
        <table className="table table-responsive-md">
          <thead className="cyan lighten-3">
            <tr>
              <th>Firstname</th>
              <th>Lastname</th>
              <th>Age</th>
              <th>Dob</th>
              <th>Gender</th>
              <th>Phone</th>
              <th>Details</th>
              <th></th>
              <th></th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {company_details}
          </tbody>
        </table>
      </div>
    )
  }
});


var ShowEachPatients = React.createClass({
  getInitialState: function(){
    return({patient: this.props.patient})
  },
  deletePatient: function(){
   var patient = this.state.patient
   data = {id: patient.id}
   $.ajax({
     url: ('/patients/'+patient.id), data: data, cache: false, remote: true, method: "DELETE",
     success: function(result) {
       alert("patient have been deleted");
     }.bind(this),
     error: function(xhr, status, err) {
       alert("error occured");
     }.bind(this)
   });
  },
  showInfo: function(){
   var patient = this.state.patient;
   window.location='/patients/'+patient.id;
  },
  editInfo: function(){
   var patient = this.state.patient;
   window.location='/patients/'+patient.id+'/edit';
  },
  render: function() {
    var patient = this.state.patient;
    return (
      <tr>
        <td>{patient.firstname} </td>
        <td>{ patient.lastname }</td>
        <td>{ patient.age }</td>
        <td>{ patient.dobb }</td>
        <td>{ patient.gender }</td>
        <td>{ patient.phone }</td>
        <td>{ patient.free_text }</td>
        <td><button type="button" onClick={this.editInfo} className="btn btn-outline-primary waves-effect"><i className="fa fa-pencil mr-1"></i>Edit</button></td>
        <td><button type="button" onClick={this.showInfo} className="btn btn-outline-default waves-effect"><i className="fa fa-magic mr-1"></i>Show</button></td>
        <td><button type="button" onClick={this.deletePatient} className="btn btn-outline-danger waves-effect"><i className="fa fa-bolt mr-1"></i>Delete</button></td>
      </tr>
    )
  }
});
