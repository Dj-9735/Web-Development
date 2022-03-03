import React, { useState,useEffect } from 'react';
import { NavLink, useNavigate, useParams } from 'react-router-dom';

const EditUser = () => {

    const [user, setuser] = useState({
        name: "",
        age: "",
        email: "",
        phone: "",
        job: "",
        address: ""
    })

    const setalluser = (e) => {
        setuser({ ...user, [e.target.name]: e.target.value });
        console.log(user);
    }

    const { id } = useParams("");
    
    const getdata = async () => {
        const res = await fetch(`/getuser/${id}`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json"
            }
        });

        const data = await res.json();
        console.log(data);

        if (res.status === 422 || !data) {
            console.log("error");
            alert("error");
        } else {
            setuser(data);
            console.log("User data has been get sucessfully!");
        }
    }

    useEffect(()=>{
        getdata();
    },[]);

    const navigate = useNavigate();

    const updateUser = async(e)=>{
        e.preventDefault();
        const {name,age,email,phone,job,address} = user;
        const resz = await fetch(`/updateuser/${id}`,{
            method: "PATCH",
            headers:{
                "Content-Type": "application/json"
            },
            body:JSON.stringify({
                name,age,email,phone,job,address
            })
        });

        const dataz = await resz.json();
        console.log(dataz);

        if(resz.status === 422 || !dataz){
            alert("Enter the complete user data");
        }else{
            alert("User data has been sucessfully updated!");
            console.log("User data has been sucessfully updated!")
            navigate("/",{replace:true});
        }
    }

    return (
        <div className='container'>
            <form className='mt-5'>
                <div className="row">
                    <div className="mb-3 col-lg-6 col-md-6 col-12">
                        <input type="text" className="form-control" id="exampleInputEmail1" placeholder='Enter Name' name="name" onChange={setalluser} value={user.name} />
                    </div>
                    <div className="mb-3 col-lg-6 col-md-6 col-12">
                        <input type="number" className="form-control" id="exampleInputEmail1" placeholder='Enter Age' onKeyPress={(event) => {
                            if (!/[0-9]/.test(event.key)) {
                                event.preventDefault();
                            }
                        }} name="age" onChange={setalluser} value={user.age} />
                    </div>
                    <div className="mb-3 col-lg-6 col-md-6 col-12">
                        <input type="email" className="form-control" id="exampleInputEmail1" placeholder='Enter Email Address' name="email" onChange={setalluser} value={user.email} />
                    </div>
                    <div className="mb-3 col-lg-6 col-md-6 col-12">
                        <input type="number" className="form-control" id="exampleInputEmail1" placeholder='Enter Phone no' onKeyPress={(event) => {
                            if (!/[0-9]/.test(event.key)) {
                                event.preventDefault();
                            }
                        }} name="phone" onChange={setalluser} value={user.phone} />
                    </div>
                    <div className="mb-3 col-lg-6 col-md-6 col-12">
                        <input type="text" className="form-control" id="exampleInputEmail1" placeholder='Enter Job' name="job" onChange={setalluser} value={user.job} />
                    </div>
                    <div className="mb-3 col-lg-6 col-md-6 col-12">
                        <input type="text" className="form-control" id="exampleInputEmail1" placeholder='Enter Address' name="address" onChange={setalluser} value={user.address} />
                    </div>
                    <button type="submit" onClick={updateUser} className="btn btn-primary mt-2">Submit</button>
                </div>
            </form>
        </div>
    )
}

export default EditUser