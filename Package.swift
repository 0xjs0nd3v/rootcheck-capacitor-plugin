// swift-tools-version: 5.9
import PackageDescription

let package = Package(
    name: "RootcheckCapacitorPlugin",
    platforms: [.iOS(.v13)],
    products: [
        .library(
            name: "RootcheckCapacitorPlugin",
            targets: ["RootCheckPluginPlugin"])
    ],
    dependencies: [
        .package(url: "https://github.com/ionic-team/capacitor-swift-pm.git", branch: "main")
    ],
    targets: [
        .target(
            name: "RootCheckPluginPlugin",
            dependencies: [
                .product(name: "Capacitor", package: "capacitor-swift-pm"),
                .product(name: "Cordova", package: "capacitor-swift-pm")
            ],
            path: "ios/Sources/RootCheckPluginPlugin"),
        .testTarget(
            name: "RootCheckPluginPluginTests",
            dependencies: ["RootCheckPluginPlugin"],
            path: "ios/Tests/RootCheckPluginPluginTests")
    ]
)