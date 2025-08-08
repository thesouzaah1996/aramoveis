package com.aramoveis.almoxarifado.service;

import com.aramoveis.almoxarifado.model.ItemCorte;
import com.aramoveis.almoxarifado.repository.ItemCorteRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class ItemCorteService {

    @Autowired
    private ItemCorteRepository itemCorteRepository;

    public ItemCorte registrarItemCorte(ItemCorte itemCorte) {
        return itemCorteRepository.save(itemCorte);
    }
}
