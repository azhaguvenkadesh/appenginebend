package com.examly.springapp;

import static org.junit.jupiter.api.Assertions.*;
import static org.mockito.ArgumentMatchers.any;
import static org.mockito.ArgumentMatchers.anyLong;
import static org.mockito.Mockito.*;

import java.io.File;
import java.util.Optional;
import java.util.List;

import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.MockitoAnnotations;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;

import com.examly.springapp.controller.AppointmentController;
import com.examly.springapp.model.Appointment;
import com.examly.springapp.service.AppointmentService;

public class SpringappApplicationTests {

    @Mock
    private AppointmentService appointmentService;

    @InjectMocks
    private AppointmentController appointmentController;

    @BeforeEach
    public void setUp() {
        MockitoAnnotations.openMocks(this);
    }

    @Test
    void backend_testAppointmentControllerFileExists() {
        String filePath = "src/main/java/com/examly/springapp/controller/AppointmentController.java";
        File file = new File(filePath);
        assertTrue(file.exists() && file.isFile());
    }

    @Test
    void backend_testAppointmentModelFileExists() {
        String filePath = "src/main/java/com/examly/springapp/model/Appointment.java";
        File file = new File(filePath);
        assertTrue(file.exists() && file.isFile());
    }

    @Test
    void backend_testAppointmentServiceFileExists() {
        String filePath = "src/main/java/com/examly/springapp/service/AppointmentService.java";
        File file = new File(filePath);
        assertTrue(file.exists() && file.isFile());
    }

    @Test
    void backend_testAppointmentRepositoryFileExists() {
        String filePath = "src/main/java/com/examly/springapp/repository/AppointmentRepository.java";
        File file = new File(filePath);
        assertTrue(file.exists() && file.isFile());
    }

    @Test
    public void backend_testGetAppointmentByIdNotFound() throws Exception {
        when(appointmentService.getAppointmentById(anyLong())).thenReturn(Optional.empty());

        ResponseEntity<Appointment> response = appointmentController.getAppointmentById(1L);

        assertEquals(HttpStatus.NOT_FOUND, response.getStatusCode());
    }

    @Test
    public void backend_testUpdateAppointmentNotFound() throws Exception {
        Appointment appointmentToUpdate = new Appointment();
        appointmentToUpdate.setId(1L);
        appointmentToUpdate.setPatientName("Updated Patient");

        when(appointmentService.getAppointmentById(anyLong())).thenReturn(Optional.empty());

        ResponseEntity<Appointment> response = appointmentController.updateAppointment(1L, appointmentToUpdate);

        assertEquals(HttpStatus.NOT_FOUND, response.getStatusCode());
    }

    @Test
    public void backend_testDeleteAppointmentNotFound() throws Exception {
        when(appointmentService.getAppointmentById(anyLong())).thenReturn(Optional.empty());

        ResponseEntity<Void> response = appointmentController.deleteAppointment(1L);

        assertEquals(HttpStatus.NOT_FOUND, response.getStatusCode());
    }

    @Test
    public void backend_testCreateAppointmentSuccess() throws Exception {
        // Arrange
        Appointment newAppointment = new Appointment();
        newAppointment.setPatientName("New Patient");
        newAppointment.setDoctorName("New Doctor");
        newAppointment.setSpecialization("Specialization");
        newAppointment.setAppointmentDate("2024-08-15");
        newAppointment.setTimeSlot("10:00 AM");

        when(appointmentService.createAppointment(any(Appointment.class))).thenReturn(newAppointment);

        // Act
        ResponseEntity<Appointment> response = appointmentController.createAppointment(newAppointment);

        // Assert
        assertEquals(HttpStatus.OK, response.getStatusCode());
        assertEquals("New Patient", response.getBody().getPatientName());
        verify(appointmentService, times(1)).createAppointment(any(Appointment.class));
    }

    @Test
    public void backend_testUpdateAppointmentSuccess() throws Exception {
        Appointment existingAppointment = new Appointment();
        existingAppointment.setId(1L);
        existingAppointment.setPatientName("Existing Patient");
        existingAppointment.setDoctorName("Existing Doctor");
        existingAppointment.setSpecialization("Existing Specialization");
        existingAppointment.setAppointmentDate("2024-08-10");
        existingAppointment.setTimeSlot("09:00 AM");

        Appointment updatedAppointmentDetails = new Appointment();
        updatedAppointmentDetails.setPatientName("Updated Patient");
        updatedAppointmentDetails.setDoctorName("Updated Doctor");
        updatedAppointmentDetails.setSpecialization("Updated Specialization");
        updatedAppointmentDetails.setAppointmentDate("2024-08-20");
        updatedAppointmentDetails.setTimeSlot("11:00 AM");

        when(appointmentService.getAppointmentById(anyLong())).thenReturn(Optional.of(existingAppointment));
        when(appointmentService.updateAppointment(anyLong(), any(Appointment.class))).thenReturn(existingAppointment);

        ResponseEntity<Appointment> response = appointmentController.updateAppointment(1L, updatedAppointmentDetails);

        assertEquals(HttpStatus.OK, response.getStatusCode());
        assertEquals("Existing Patient", response.getBody().getPatientName());
        verify(appointmentService, times(1)).updateAppointment(anyLong(), any(Appointment.class));
    }

    @Test
    public void backend_testDeleteAppointmentSuccess() throws Exception {
        when(appointmentService.deleteAppointment(anyLong())).thenReturn(true);

        ResponseEntity<Void> response = appointmentController.deleteAppointment(1L);

        assertEquals(HttpStatus.OK, response.getStatusCode());
        verify(appointmentService, times(1)).deleteAppointment(anyLong());
    }

    @Test
    public void backend_testGetAllAppointments() throws Exception {
        Appointment appointment1 = new Appointment();
        appointment1.setId(1L);
        appointment1.setPatientName("Patient 1");

        Appointment appointment2 = new Appointment();
        appointment2.setId(2L);
        appointment2.setPatientName("Patient 2");

        when(appointmentService.getAllAppointments()).thenReturn(List.of(appointment1, appointment2));

        List<Appointment> appointments = appointmentController.getAllAppointments();

        assertEquals(2, appointments.size());
        verify(appointmentService, times(1)).getAllAppointments();
    }
}