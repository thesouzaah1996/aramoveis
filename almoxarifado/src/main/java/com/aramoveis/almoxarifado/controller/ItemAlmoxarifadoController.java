package com.aramoveis.almoxarifado.controller;

import com.aramoveis.almoxarifado.model.ItemAlmoxarifado;
import com.aramoveis.almoxarifado.service.ItemAlmoxarifadoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/entrada/produto/almoxarifado")
public class ItemAlmoxarifadoController {

    @Autowired
    private ItemAlmoxarifadoService itemAlmoxarifadoService;

    @PostMapping
    public ResponseEntity<ItemAlmoxarifado> addItemAlmoxarifado(@RequestBody ItemAlmoxarifado itemAlmoxarifado) {
        ItemAlmoxarifado itemSalvo = itemAlmoxarifadoService.registrarItemAlmoxarifado(itemAlmoxarifado);
        return ResponseEntity.status(HttpStatus.CREATED).body(itemSalvo);
    }
}
