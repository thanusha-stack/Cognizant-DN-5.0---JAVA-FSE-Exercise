
BEGIN
    FOR i in (select * from customers) LOOP
        IF i.age>=60 THEN
            update customers 
            set loan_amount=loan_amount-1 
            where id=i.id;
        END IF;
    END LOOP;
END;
/