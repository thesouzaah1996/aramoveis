package com.aramoveis.almoxarifado.controller;

import com.aramoveis.almoxarifado.model.ItemPintura;
import com.aramoveis.almoxarifado.service.ItemPinturaService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("api/entrada/produto/pintura")
public class ItemPinturaController {

    @Autowired
    private ItemPinturaService itemPinturaService;

    @PostMapping
    public ResponseEntity<ItemPintura> addItemPintura(@RequestBody ItemPintura itemPintura) {
        ItemPintura itemSalvo = itemPinturaService.registrarItemPintura(itemPintura);
        return ResponseEntity.status(HttpStatus.CREATED).body(itemPintura);
    }
}
