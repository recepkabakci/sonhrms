import React,{ useEffect,useState} from "react";
import './index.css'
import { useSelector, useDispatch } from "react-redux";
import { fetchGetAllEmployee, nextPage} from "../../store/features/userSlice";

export default function Index()  {
  const dispatch = useDispatch();


  const employeeList = useSelector((state) => state.user.employees);
  const isLoading = useSelector((state) => state.user.isLoading);
  const isLoadMoreLoading = useSelector(
    (state) => state.user.isLoadMoreLoading
  );
  const page = useSelector((state) => state.user.page);



  const loadMore = () => {
    dispatch(fetchGetAllEmployee(page + 1));
    dispatch(nextPage());
  };

  const [employee,setEmployee] = useState({
    id:0,
    firstName: '',
    lastName: '',
    phoneNumber:'',
    emailAddress:'',
    addressId:0,
});



  const getEmployee = (id) => {
    fetch(`http://localhost:9091/v1/api/manager/findById?id=${id}`,{
      method: 'POST',
      headers:{
          Accept: 'application/json',
          'Content-Type': 'application/json',
          'Accept-Encoding': 'br;q=1.0, gzip;q=0.8, *;q=0.1',
      },
      body: JSON.stringify(id)
  }).then(p=>p.json()) 
  .then(p => setEmployee(p))
  .catch(err=>console.log(err));
  }

  console.log(employee); 


  useEffect(() => {
    dispatch(fetchGetAllEmployee(0));
  }, []);

  return (
    <div className="container">
      <div className="row">
      {isLoading ? (
            <iframe
              src="https://embed.lottiefiles.com/animation/98194"
              title="loading"
              style={{ marginLeft: "25%", width: "50%", height: "50%" }}
            ></iframe>
          ) : null}
        <table className="table table-striped table-hover">
          <thead>
            <tr className="table-primary">
              <th></th>
              <th>Photo</th>
              <th>Name</th>
              <th>Last Name</th>
              <th>Email</th>
              <th>Phone Number</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {employeeList.map((item, index) => {
              return (
                <tr key={index}>
                  <td> {index + 1}</td>
                  <td>
                    {" "}
                    <img
                      src={`https://picsum.photos/id/100${index}/50/50`}
                      alt=""
                    />
                  </td>
                  <td>
                    {item.firstName} {item.middleName}
                  </td>
                  <td>{item.lastName}</td>
                  <td>{item.emailAddress}</td>
                  <td>{item.profilePhoto}</td>
                  <td>
                    <button 
                      className="btn btn-primary"
                      data-bs-toggle="modal"
                      data-bs-target="#modal-duzenle"
                      onClick={() => getEmployee(item.id)}
                    >
                      <i className="fa fa-pen-square">Düzenle</i>
                    </button>
                    <button className="btn btn-danger">
                      <i className="fa fa-eraser">Sil</i>
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
   
            <div
              className="modal fade"
              id="modal-duzenle"
              tabIndex="-1"
              aria-labelledby="exampleModalLabel"
              aria-hidden="true"
            >
              <div className="modal-dialog">
                <div className="modal-content">
                  <form action="update" method="post">
                    <div className="modal-header">
                      <h5 className="modal-title" id="exampleModalLabel">
                        Çalışan Güncelle
                      </h5>
                      <button
                        type="button"
                        className="btn-close"
                        data-bs-dismiss="modal"
                        aria-label="Close"
                      ></button>
                    </div>
                    <div className="modal-body">
                      <div className="col-12">
                        <input
                          type="text"
                          name="id"
                          id="txteditid"
                          hidden
                        ></input>
                        <div className="mb-3">
                          <label className="form-label">Ad</label>
                          <input 
                            type="text"
                            className="form-control"
                            value={employee.firstName}
                            // onChange={(p)=>setEmployee({...employee,firstName: p.target.value})}
                          ></input>
                        </div>
                        <div className="mb-3">
                          <label className="form-label">Soyad</label>
                          <input
                            id="txteditadet"
                            type="text"
                            className="form-control"
                            value={employee.lastName}
                          ></input>
                        </div>
                        <div className="mb-3">
                          <label className="form-label">Telefon Numarası</label>
                          <input
                            id="txteditadet"
                            type="text"
                            className="form-control"
                            value={employee.phoneNumber}
                          ></input>
                        </div>
                        <div className="mb-3">
                          <label className="form-label">Email</label>
                          <input
                            id="txteditfiyat"
                            type="text"
                            className="form-control"
                            value={employee.emailAddress}
                          ></input>
                        </div>
                        <div className="mb-3">
                          <label className="form-label">Adres</label>
                          <input
                            id="txteditadet"
                            type="text"
                            className="form-control"
                            value={employee.addressId}
                          ></input>
                        </div>
                      </div>
                    </div>
                    <div className="modal-footer">
                      <button
                        type="button"
                        className="btn btn-secondary"
                        data-bs-dismiss="modal"
                      >
                        İptal
                      </button>
                      <button type="submit" className="btn btn-primary">
                        Güncelle
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
      </div>
      {isLoadMoreLoading ? (
            <iframe
              src="https://embed.lottiefiles.com/animation/98194"
              title="loading"
              style={{ marginLeft: "25%", width: "50%", height: "50%" }}
            ></iframe>
          ) : null}
      <div className="gap-2 d-grid m-4">
        <button onClick={loadMore} className="btn btn-primary">
          load more...
        </button>
      </div>
    </div>
  );
}
