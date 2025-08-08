package com.aramoveis.almoxarifado.model;

import jakarta.persistence.Entity;
import lombok.AllArgsConstructor;
import lombok.Data;

@Entity
@Data
@AllArgsConstructor
public class ItemAlmoxarifado extends BaseEntity {

    private String nomeMaterial;
    private int quantidade;
    private String unidadeDeMedida;
    private int itensPorUnidade;
    private double totalDeItens;
}
