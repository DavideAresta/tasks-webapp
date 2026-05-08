-- Create indexes for performance
CREATE INDEX idx_users_username ON users(username);
CREATE INDEX idx_products_name ON products(name);
CREATE INDEX idx_orders_user_id ON orders(user_id);
CREATE INDEX idx_orders_product_id ON orders(product_id);

-- Down migration
DROP INDEX IF EXISTS idx_users_username;
DROP INDEX IF EXISTS idx_products_name;
DROP INDEX IF EXISTS idx_orders_user_id;
DROP INDEX IF EXISTS idx_orders_product_id;