package com.aramoveis.almoxarifado.controller;

import com.aramoveis.almoxarifado.model.ItemCorte;
import com.aramoveis.almoxarifado.service.ItemCorteService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/entrada/produtos/corte")
public class ItemCorteController {

    @Autowired
    private ItemCorteService itemCorteService;

    @PostMapping
    public ResponseEntity<ItemCorte> addItemCorte(@RequestBody ItemCorte itemCorte) {
        ItemCorte itemSalvo = itemCorteService.registrarItemCorte(itemCorte);
        return ResponseEntity.status(HttpStatus.CREATED).body(itemCorte);
    }
}
