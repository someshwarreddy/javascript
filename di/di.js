//Two main roles exist in the DI system: dependency consumer and dependency provider.

// injector
// An object in the Angular dependency-injection system that can find a named dependency in its cache or create a dependency using a configured provider. Injectors are created for NgModules automatically as part of the bootstrap process and are inherited through the component hierarchy.

// An injector provides a singleton instance of a dependency, and can inject this same instance in multiple components.
// A hierarchy of injectors at the NgModule and component level can provide different instances of a dependency to their own components and child components.
// You can configure injectors with different providers that can provide different implementations of the same dependency.