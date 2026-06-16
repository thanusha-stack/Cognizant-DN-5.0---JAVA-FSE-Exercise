BEGIN
    FOR i in (SELECT * FROM customers) LOOP
        IF i.balance>10000 THEN
            UPDATE customers 
            SET isvip=true
            WHERE id=i.id;
        END IF;
    END LOOP;
END;
/