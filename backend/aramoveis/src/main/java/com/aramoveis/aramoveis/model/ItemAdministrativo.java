package com.aramoveis.aramoveis.model;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.validation.constraints.NotNull;
import lombok.Data;
import lombok.EqualsAndHashCode;

@EqualsAndHashCode(callSuper = true)
@Entity
@Data
public class ItemAdministrativo extends BaseEntity {

    @Id
    private String id;

    @NotNull
    private String item;

    @NotNull
    private int quantidade;

    @NotNull
    private String unidade;
}
