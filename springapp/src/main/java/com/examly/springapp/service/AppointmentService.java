package com.examly.springapp.service;

import com.examly.springapp.model.Appointment;
import com.examly.springapp.repository.AppointmentRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class AppointmentService {

    @Autowired
    private AppointmentRepository appointmentRepository;

    public List<Appointment> getAllAppointments() {
        return appointmentRepository.findAll();
    }

    public Optional<Appointment> getAppointmentById(Long id) {
        return appointmentRepository.findById(id);
    }

    public Appointment createAppointment(Appointment appointment) {
        return appointmentRepository.save(appointment);
    }

    public Appointment updateAppointment(Long id, Appointment appointmentDetails) {
        Appointment appointment = appointmentRepository.findById(id)
                .orElseThrow(() -> new IllegalArgumentException("Appointment not found with id: " + id));

        appointment.setPatientName(appointmentDetails.getPatientName());
        appointment.setDoctorName(appointmentDetails.getDoctorName());
        appointment.setSpecialization(appointmentDetails.getSpecialization());
        appointment.setAppointmentDate(appointmentDetails.getAppointmentDate());
        appointment.setTimeSlot(appointmentDetails.getTimeSlot());

        return appointmentRepository.save(appointment);
    }

    public boolean deleteAppointment(Long id) {
        Optional<Appointment> appointment = appointmentRepository.findById(id);
        if (appointment.isPresent()) {
            appointmentRepository.deleteById(id);
            return true;
        } else {
            return false;
        }
    }
}