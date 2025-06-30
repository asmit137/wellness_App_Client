import React, { useEffect, useState } from "react";
import axios from "axios";
import ConsultationForm from "../components/consultation/ConsultationForm";
import ConsultationList from "../components/consultation/ConsultationList";
import BASE_URL from "../api";

const Consultation = () => {
  const [consultations, setConsultations] = useState([]);
  const token = localStorage.getItem("token");

  const fetchConsultations = async () => {
    const res = await axios.get(`${BASE_URL}/api/consultation`, {
      headers: { Authorization: `Bearer ${token}` },
    });
    setConsultations(res.data);
  };

  useEffect(() => {
    fetchConsultations();
  }, []);

  return (
    <div className="max-w-3xl mx-auto p-4">
      <h2 className="text-2xl font-semibold mb-4">Your Consultations</h2>
      <ConsultationForm onBooked={fetchConsultations} />
      <ConsultationList consultations={consultations} />
    </div>
  );
};

export default Consultation;
