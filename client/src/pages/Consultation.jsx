import React, { useEffect, useState } from "react";
import axios from "axios";
import ConsultationForm from "../components/consultation/ConsultationForm";
import ConsultationList from "../components/consultation/ConsultationList";
import BASE_URL from "../api";
import Loader from "../components/Loader"; 

const Consultation = () => {
  const [consultations, setConsultations] = useState([]);
  const [loading, setLoading] = useState(true); 
  const token = localStorage.getItem("token");

  const fetchConsultations = async () => {
    setLoading(true);
    try {
      const res = await axios.get(`${BASE_URL}/api/consultation`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      setConsultations(res.data);
    } catch (error) {
      console.error("Failed to fetch consultations", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchConsultations();
  }, []);

  if (loading) return <Loader />;

  return (
    <div className="max-w-3xl mx-auto p-4">
      <h2 className="text-2xl font-semibold mb-4">Your Consultations</h2>
      <ConsultationForm
        onBooked={() => {
          alert("Appointment booked successfully!");
          fetchConsultations();
        }}
      />
      <ConsultationList
        consultations={consultations}
        fetchConsultations={fetchConsultations}
      />
    </div>
  );
};

export default Consultation;
