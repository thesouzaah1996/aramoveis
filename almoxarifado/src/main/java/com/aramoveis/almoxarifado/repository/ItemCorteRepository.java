package com.aramoveis.almoxarifado.repository;

import com.aramoveis.almoxarifado.model.ItemCorte;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ItemCorteRepository extends JpaRepository<ItemCorte, Long> {
}
