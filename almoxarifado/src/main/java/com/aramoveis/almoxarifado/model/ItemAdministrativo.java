package com.aramoveis.almoxarifado.model;

import jakarta.persistence.Entity;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Data
@AllArgsConstructor
@NoArgsConstructor
public class ItemAdministrativo extends BaseEntity {

    private String nomeItem;

    private int quantidade;

    private String unidade;
}
