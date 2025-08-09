package com.aramoveis.almoxarifado.model;

import jakarta.persistence.Entity;
import lombok.AllArgsConstructor;
import lombok.Data;

@Entity
@Data
@AllArgsConstructor
public class ItemPintura extends BaseEntity {

    private String nome;
    private int quantidade;
    private String unidade;
    private String cor;
}
