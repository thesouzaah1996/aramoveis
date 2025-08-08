package com.aramoveis.almoxarifado.repository;

import com.aramoveis.almoxarifado.model.ItemAlmoxarifado;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ItemAlmoxarifadoRepository extends JpaRepository<ItemAlmoxarifado, Long> {
}
