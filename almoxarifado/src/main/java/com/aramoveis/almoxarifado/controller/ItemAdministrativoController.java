package com.aramoveis.almoxarifado.controller;

import com.aramoveis.almoxarifado.model.ItemAdministrativo;
import com.aramoveis.almoxarifado.service.ItemAdministrativoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;


@RestController
@RequestMapping("/api/entrada/produtos/administrativo")
public class ItemAdministrativoController {

    @Autowired
    private ItemAdministrativoService itemAdministrativoService;

    @PostMapping
    public ResponseEntity<ItemAdministrativo>adicionarItemAdministrativo(@RequestBody ItemAdministrativo itemAdministrativo) {
        ItemAdministrativo itemSalvo = itemAdministrativoService.registrarItemAdministrativo(itemAdministrativo);
        return ResponseEntity.status(HttpStatus.CREATED).body(itemSalvo);
    }
}
