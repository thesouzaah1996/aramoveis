package com.aramoveis.aramoveis.model;

import jakarta.persistence.Id;
import jakarta.persistence.MappedSuperclass;

import java.time.Instant;
import java.time.LocalDate;

@MappedSuperclass
public abstract class BaseEntity {

    public LocalDate dataEntrada;
    public String numeroNotaFiscal;
    public String fornecedor;
    public String responsavelRecebimento;
//    public Instant horaEntrada;
}
