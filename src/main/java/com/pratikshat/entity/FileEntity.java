package com.pratikshat.entity;

import java.util.Date;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;

import javax.persistence.Id;

import org.springframework.format.annotation.DateTimeFormat;

import com.fasterxml.jackson.annotation.JsonFormat;

@Entity
public class FileEntity {

	@Id
	@GeneratedValue
	private int srNo;
	private String customerName;
	private String customerCode;
	private String siteName;
	@Column(length = 1000)
	private String siteAddress;
	private String city;
	private String state;
	private String localContactPersonName;
	private String localPersonContact;
	private String typeOfCharger;
	private String model;
	private String serialNumber;
	private String finalInstallationStatus;
	private String installationStatus;
	private String commissioningStatus;
	private String commissionedBy;
	@JsonFormat(pattern="yyyy-MM-dd")
	@DateTimeFormat(pattern = "yyyy-MM-dd")
	private Date commissioningDate;
	
	private String pM1Status;
	@JsonFormat(pattern="yyyy-MM-dd")
	@DateTimeFormat(pattern = "yyyy-MM-dd")
	private Date pM1DoneOn;
	private String pM1Done;
	private String pM1Remarks;
	private String sWUpdate;
	@JsonFormat(pattern="yyyy-MM-dd")
	@DateTimeFormat(pattern = "yyyy-MM-dd")
	private Date pMDueDate;
	
	private String pM2Status;
	@JsonFormat(pattern="yyyy-MM-dd")
	@DateTimeFormat(pattern = "yyyy-MM-dd")
	private String pM2DoneOn;
	private String pM2Done;
	private String pM2Remarks;
	
	private String pM3Status;
	private String pM3DoneOn;
	private String pM3Done;
	private String pM3Remarks;
	
	private String pM4Status;
	private String pM4DoneOn;
	private String pM4Done;
	private String pM4Remarks;
	
	private String pM5Status;
	@JsonFormat(pattern="yyyy-MM-dd")
	@DateTimeFormat(pattern = "yyyy-MM-dd")
	private String pM5DoneOn;
	private String pM5Done;
	private String pM5Remarks;
	
	private String pM6Status;
	private String pM6Done;
	private String pM6Remarks;
	private String pM6DoneOn;
	public int getSrNo() {
		return srNo;
	}
	public void setSrNo(int srNo) {
		this.srNo = srNo;
	}
	public String getCustomerName() {
		return customerName;
	}
	public void setCustomerName(String customerName) {
		this.customerName = customerName;
	}
	public String getCustomerCode() {
		return customerCode;
	}
	public void setCustomerCode(String customerCode) {
		this.customerCode = customerCode;
	}
	public String getSiteName() {
		return siteName;
	}
	public void setSiteName(String siteName) {
		this.siteName = siteName;
	}
	public String getSiteAddress() {
		return siteAddress;
	}
	public void setSiteAddress(String siteAddress) {
		this.siteAddress = siteAddress;
	}
	public String getCity() {
		return city;
	}
	public void setCity(String city) {
		this.city = city;
	}
	public String getState() {
		return state;
	}
	public void setState(String state) {
		this.state = state;
	}
	public String getLocalContactPersonName() {
		return localContactPersonName;
	}
	public void setLocalContactPersonName(String localContactPersonName) {
		this.localContactPersonName = localContactPersonName;
	}
	public String getLocalPersonContact() {
		return localPersonContact;
	}
	public void setLocalPersonContact(String localPersonContact) {
		this.localPersonContact = localPersonContact;
	}
	public String getTypeOfCharger() {
		return typeOfCharger;
	}
	public void setTypeOfCharger(String typeOfCharger) {
		this.typeOfCharger = typeOfCharger;
	}
	public String getModel() {
		return model;
	}
	public void setModel(String model) {
		this.model = model;
	}
	public String getSerialNumber() {
		return serialNumber;
	}
	public void setSerialNumber(String serialNumber) {
		this.serialNumber = serialNumber;
	}
	public String getFinalInstallationStatus() {
		return finalInstallationStatus;
	}
	public void setFinalInstallationStatus(String finalInstallationStatus) {
		this.finalInstallationStatus = finalInstallationStatus;
	}
	public String getInstallationStatus() {
		return installationStatus;
	}
	public void setInstallationStatus(String installationStatus) {
		this.installationStatus = installationStatus;
	}
	public String getCommissioningStatus() {
		return commissioningStatus;
	}
	public void setCommissioningStatus(String commissioningStatus) {
		this.commissioningStatus = commissioningStatus;
	}
	public String getCommissionedBy() {
		return commissionedBy;
	}
	public void setCommissionedBy(String commissionedBy) {
		this.commissionedBy = commissionedBy;
	}
	public Date getCommissioningDate() {
		return commissioningDate;
	}
	public void setCommissioningDate(Date commissioningDate) {
		this.commissioningDate = commissioningDate;
	}
	public String getpM1Status() {
		return pM1Status;
	}
	public void setpM1Status(String pM1Status) {
		this.pM1Status = pM1Status;
	}
	public Date getpM1DoneOn() {
		return pM1DoneOn;
	}
	public void setpM1DoneOn(Date pM1DoneOn) {
		this.pM1DoneOn = pM1DoneOn;
	}
	public String getpM1Done() {
		return pM1Done;
	}
	public void setpM1Done(String pM1Done) {
		this.pM1Done = pM1Done;
	}
	public String getpM1Remarks() {
		return pM1Remarks;
	}
	public void setpM1Remarks(String pM1Remarks) {
		this.pM1Remarks = pM1Remarks;
	}
	public String getsWUpdate() {
		return sWUpdate;
	}
	public void setsWUpdate(String sWUpdate) {
		this.sWUpdate = sWUpdate;
	}
	public Date getpMDueDate() {
		return pMDueDate;
	}
	public void setpMDueDate(Date pMDueDate) {
		this.pMDueDate = pMDueDate;
	}
	public String getpM2Status() {
		return pM2Status;
	}
	public void setpM2Status(String pM2Status) {
		this.pM2Status = pM2Status;
	}
	public String getpM2DoneOn() {
		return pM2DoneOn;
	}
	public void setpM2DoneOn(String pM2DoneOn) {
		this.pM2DoneOn = pM2DoneOn;
	}
	public String getpM2Done() {
		return pM2Done;
	}
	public void setpM2Done(String pM2Done) {
		this.pM2Done = pM2Done;
	}
	public String getpM2Remarks() {
		return pM2Remarks;
	}
	public void setpM2Remarks(String pM2Remarks) {
		this.pM2Remarks = pM2Remarks;
	}
	public String getpM3Status() {
		return pM3Status;
	}
	public void setpM3Status(String pM3Status) {
		this.pM3Status = pM3Status;
	}
	public String getpM3DoneOn() {
		return pM3DoneOn;
	}
	public void setpM3DoneOn(String pM3DoneOn) {
		this.pM3DoneOn = pM3DoneOn;
	}
	public String getpM3Done() {
		return pM3Done;
	}
	public void setpM3Done(String pM3Done) {
		this.pM3Done = pM3Done;
	}
	public String getpM3Remarks() {
		return pM3Remarks;
	}
	public void setpM3Remarks(String pM3Remarks) {
		this.pM3Remarks = pM3Remarks;
	}
	public String getpM4Status() {
		return pM4Status;
	}
	public void setpM4Status(String pM4Status) {
		this.pM4Status = pM4Status;
	}
	public String getpM4DoneOn() {
		return pM4DoneOn;
	}
	public void setpM4DoneOn(String pM4DoneOn) {
		this.pM4DoneOn = pM4DoneOn;
	}
	public String getpM4Done() {
		return pM4Done;
	}
	public void setpM4Done(String pM4Done) {
		this.pM4Done = pM4Done;
	}
	public String getpM4Remarks() {
		return pM4Remarks;
	}
	public void setpM4Remarks(String pM4Remarks) {
		this.pM4Remarks = pM4Remarks;
	}
	public String getpM5Status() {
		return pM5Status;
	}
	public void setpM5Status(String pM5Status) {
		this.pM5Status = pM5Status;
	}
	public String getpM5DoneOn() {
		return pM5DoneOn;
	}
	public void setpM5DoneOn(String pM5DoneOn) {
		this.pM5DoneOn = pM5DoneOn;
	}
	public String getpM5Done() {
		return pM5Done;
	}
	public void setpM5Done(String pM5Done) {
		this.pM5Done = pM5Done;
	}
	public String getpM5Remarks() {
		return pM5Remarks;
	}
	public void setpM5Remarks(String pM5Remarks) {
		this.pM5Remarks = pM5Remarks;
	}
	public String getpM6Status() {
		return pM6Status;
	}
	public void setpM6Status(String pM6Status) {
		this.pM6Status = pM6Status;
	}
	public String getpM6DoneOn() {
		return pM6DoneOn;
	}
	public void setpM6DoneOn(String pM6DoneOn) {
		this.pM6DoneOn = pM6DoneOn;
	}
	public String getpM6Done() {
		return pM6Done;
	}
	public void setpM6Done(String pM6Done) {
		this.pM6Done = pM6Done;
	}
	public String getpM6Remarks() {
		return pM6Remarks;
	}
	public void setpM6Remarks(String pM6Remarks) {
		this.pM6Remarks = pM6Remarks;
	}
	
	
}
