package com.aramoveis.almoxarifado.service;

import com.aramoveis.almoxarifado.model.ItemAlmoxarifado;
import com.aramoveis.almoxarifado.repository.ItemAlmoxarifadoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
public class ItemAlmoxarifadoService {

    @Autowired
    private ItemAlmoxarifadoRepository itemAlmoxarifadoRepository;

    public ItemAlmoxarifado registrarItemAlmoxarifado(ItemAlmoxarifado itemAlmoxarifado) {
        return itemAlmoxarifadoRepository.save(itemAlmoxarifado);
    }
}
