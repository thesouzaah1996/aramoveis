package com.aramoveis.almoxarifado.model;

import jakarta.persistence.Entity;
import lombok.AllArgsConstructor;
import lombok.Data;

@Entity
@Data
@AllArgsConstructor
public class ItemCorte extends BaseEntity {

    private String materialBruto;

    private Integer quantidade;

    private String unidadeMedida;

    private String dimensoes;

    TipoMaterialCorte tipoMaterial;
}
