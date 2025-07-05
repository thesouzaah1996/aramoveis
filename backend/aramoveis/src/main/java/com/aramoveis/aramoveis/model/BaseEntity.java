package com.aramoveis.aramoveis.model;

import jakarta.persistence.MappedSuperclass;

import java.time.Instant;
import java.time.LocalDate;

@MappedSuperclass
public abstract class BaseEntity {

    private String id;
    private LocalDate dataEntrada;
    private String numeroNotaFiscal;
    private String fornecedor;
    private String responsavelRecebimento;
    private Instant horaEntrada;
}
